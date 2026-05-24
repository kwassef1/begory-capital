import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
    _honeypot: z.string().max(0).optional(),
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.string().email("Invalid email address").max(200),
    phone: z
        .string()
        .min(7, "Phone number is too short")
        .max(20, "Phone number is too long")
        .refine((v) => /^\+?[\d\s\-().]+$/.test(v), "Invalid phone number"),
    propertyType: z.enum([
        "Single-family residence",
        "2–4 unit",
        "Multifamily (5+ units)",
        "Mixed-use",
        "Other",
    ]),
    purpose: z.enum([
        "Purchase",
        "Refinance",
        "Cash-out refinance",
        "Fix & flip",
        "Bridge",
    ]),
    timeline: z.enum([
        "7–10 days",
        "2–3 weeks",
        "30+ days",
        "Just exploring options",
    ]),
    details: z.string().min(1, "Please tell us about the deal").max(5000),
});

// In-memory rate limiter — 5 submissions per IP per 15 minutes.
// Note: resets on server restart and does not share state across
// multiple serverless instances. Sufficient for basic abuse prevention.
const ipLog = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const hits = (ipLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    if (hits.length >= LIMIT) return true;
    ipLog.set(ip, [...hits, now]);
    return false;
}

export async function POST(req: Request) {
    // Fail fast if email credentials are not configured
    const { ZOHO_USER, ZOHO_PASS } = process.env;
    if (!ZOHO_USER || !ZOHO_PASS) {
        console.error("ZOHO_USER or ZOHO_PASS is not set");
        return NextResponse.json(
            { error: "Email service is not configured." },
            { status: 500 }
        );
    }

    // Rate limit by IP
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
        req.headers.get("x-real-ip") ??
        "unknown";

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        );
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const result = schema.safeParse(body);
    if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of result.error.issues) {
            const field = String(issue.path[0] ?? "form");
            if (!fieldErrors[field]) fieldErrors[field] = issue.message;
        }
        return NextResponse.json({ fieldErrors }, { status: 422 });
    }

    // Honeypot: silently succeed so bots don't know they were blocked
    if (result.data._honeypot) {
        return NextResponse.json({ ok: true });
    }

    const { firstName, lastName, email, phone, propertyType, purpose, timeline, details } =
        result.data;
    const name = `${firstName} ${lastName}`;

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: { user: ZOHO_USER, pass: ZOHO_PASS },
        });

        await transporter.sendMail({
            from: `"Begory Capital" <${ZOHO_USER}>`,
            to: "mg@begorycapital.com",
            replyTo: email,
            subject: `New deal inquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone}`,
                `Property type: ${propertyType}`,
                `Loan purpose: ${purpose}`,
                `Timeline: ${timeline}`,
                ``,
                `Details:`,
                details,
            ].join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json(
            { error: "Failed to send message." },
            { status: 500 }
        );
    }
}
