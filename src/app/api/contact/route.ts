import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.email("Invalid email address").max(200),
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

export async function POST(req: Request) {
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

    const { firstName, lastName, email, phone, propertyType, purpose, timeline, details } =
        result.data;
    const name = `${firstName} ${lastName}`;

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.ZOHO_USER,
                pass: process.env.ZOHO_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Begory Capital" <${process.env.ZOHO_USER}>`,
            to: "mg@begorycapital.com",
            replyTo: email,
            subject: `New deal inquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone || "—"}`,
                `Property type: ${propertyType}`,
                `Loan purpose: ${purpose}`,
                `Timeline: ${timeline}`,
                ``,
                `Details:`,
                details || "—",
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
