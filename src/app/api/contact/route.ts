import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email").max(200),
    phone: z.string().max(30).optional(),
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
    details: z.string().max(5000).optional(),
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
        return NextResponse.json(
            { error: result.error.issues[0].message },
            { status: 422 }
        );
    }

    const { name, email, phone, propertyType, purpose, timeline, details } =
        result.data;

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
