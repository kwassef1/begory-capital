"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function buildDealSummary(p: URLSearchParams): string {
    const deal = p.get("deal");
    if (deal === "flip") {
        return [
            "Deal type: Fix & Flip",
            p.get("purchase") &&
                `Purchase price: $${Number(p.get("purchase")).toLocaleString()}`,
            p.get("rehab") &&
                `Rehab budget: $${Number(p.get("rehab")).toLocaleString()}`,
            p.get("arv") && `ARV: $${Number(p.get("arv")).toLocaleString()}`,
            p.get("months") && `Holding period: ${p.get("months")} months`,
            "---",
            p.get("totalCost") &&
                `Est. total cost: $${Number(p.get("totalCost")).toLocaleString()}`,
            p.get("profit") &&
                `Est. profit: $${Number(p.get("profit")).toLocaleString()}`,
            p.get("roi") && `Est. ROI: ${p.get("roi")}%`,
        ]
            .filter(Boolean)
            .join("\n");
    }
    if (deal === "rental") {
        return [
            "Deal type: DSCR Rental",
            p.get("purchase") &&
                `Purchase price: $${Number(p.get("purchase")).toLocaleString()}`,
            p.get("down") && `Down payment: ${p.get("down")}%`,
            p.get("rate") && `Interest rate: ${p.get("rate")}%`,
            p.get("rent") &&
                `Monthly rent: $${Number(p.get("rent")).toLocaleString()}`,
            "---",
            p.get("cashFlow") &&
                `Est. monthly cash flow: $${Number(p.get("cashFlow")).toLocaleString()}`,
            p.get("capRate") && `Cap rate: ${p.get("capRate")}%`,
            p.get("coc") && `Cash-on-cash return: ${p.get("coc")}%`,
        ]
            .filter(Boolean)
            .join("\n");
    }
    return "";
}

const selectClass = (hasError: boolean) =>
    [
        "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        hasError ? "border-destructive" : "border-input",
    ].join(" ");

const textareaClass = (hasError: boolean) =>
    [
        "flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none",
        hasError ? "border-destructive" : "border-input",
    ].join(" ");

type Status = "idle" | "loading" | "success" | "error";

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="text-xs text-destructive">{message}</p>;
}

export default function ContactForm() {
    const [details, setDetails] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const params = useSearchParams();

    useEffect(() => {
        if (params.get("deal")) {
            setDetails(buildDealSummary(params));
        }
    }, [params]);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const fd = new FormData(e.currentTarget);
        const phone = String(fd.get("phone") ?? "").trim();
        const email = String(fd.get("email") ?? "").trim();

        const clientErrors: Record<string, string> = {};

        if (phone.length < 7) {
            clientErrors.phone = "Phone number is too short";
        } else if (!/^\+?[\d\s\-().]+$/.test(phone)) {
            clientErrors.phone = "Invalid phone number";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            clientErrors.email = "Invalid email address";
        }

        if (!details.trim()) {
            clientErrors.details = "Please tell us about the deal";
        }

        if (Object.keys(clientErrors).length > 0) {
            setFieldErrors(clientErrors);
            setStatus("idle");
            return;
        }

        setFieldErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: fd.get("firstName"),
                    lastName: fd.get("lastName"),
                    email,
                    phone,
                    propertyType: fd.get("propertyType"),
                    purpose: fd.get("purpose"),
                    timeline: fd.get("timeline"),
                    details,
                }),
            });

            if (res.status === 422) {
                const data = await res.json();
                setFieldErrors(data.fieldErrors ?? {});
                setStatus("idle");
                return;
            }

            if (!res.ok) throw new Error();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-3 h-full items-center justify-center text-center">
                <div className="text-2xl">✓</div>
                <div className="text-base font-semibold text-foreground">
                    Message sent
                </div>
                <p className="text-sm text-muted-foreground">
                    Thanks — we&apos;ll be in touch shortly.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4 h-full"
        >
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-foreground">
                    Submit a deal summary
                </h2>
                <p className="text-sm text-muted-foreground">
                    Tell us about the property and your timeline — we'll be in
                    touch.
                </p>
            </div>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-firstName"
                    >
                        First name
                    </label>
                    <Input
                        id="cf-firstName"
                        name="firstName"
                        type="text"
                        placeholder="First"
                        autoComplete="given-name"
                        required
                        aria-invalid={!!fieldErrors.firstName}
                    />
                    <FieldError message={fieldErrors.firstName} />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-lastName"
                    >
                        Last name
                    </label>
                    <Input
                        id="cf-lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last"
                        autoComplete="family-name"
                        required
                        aria-invalid={!!fieldErrors.lastName}
                    />
                    <FieldError message={fieldErrors.lastName} />
                </div>
            </div>

            {/* Phone + email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-phone"
                    >
                        Phone
                    </label>
                    <Input
                        id="cf-phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        autoComplete="tel"
                        required
                        aria-invalid={!!fieldErrors.phone}
                    />
                    <FieldError message={fieldErrors.phone} />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-email"
                    >
                        Email
                    </label>
                    <Input
                        id="cf-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        aria-invalid={!!fieldErrors.email}
                    />
                    <FieldError message={fieldErrors.email} />
                </div>
            </div>

            {/* Deal fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-property-type"
                    >
                        Property type
                    </label>
                    <select
                        id="cf-property-type"
                        name="propertyType"
                        className={selectClass(!!fieldErrors.propertyType)}
                    >
                        <option>Single-family residence</option>
                        <option>2–4 unit</option>
                        <option>Multifamily (5+ units)</option>
                        <option>Mixed-use</option>
                        <option>Other</option>
                    </select>
                    <FieldError message={fieldErrors.propertyType} />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-purpose"
                    >
                        Loan purpose
                    </label>
                    <select
                        id="cf-purpose"
                        name="purpose"
                        className={selectClass(!!fieldErrors.purpose)}
                    >
                        <option>Purchase</option>
                        <option>Refinance</option>
                        <option>Cash-out refinance</option>
                        <option>Fix &amp; flip</option>
                        <option>Bridge</option>
                    </select>
                    <FieldError message={fieldErrors.purpose} />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-timeline"
                    >
                        Desired closing timeline
                    </label>
                    <select
                        id="cf-timeline"
                        name="timeline"
                        className={selectClass(!!fieldErrors.timeline)}
                    >
                        <option>7–10 days</option>
                        <option>2–3 weeks</option>
                        <option>30+ days</option>
                        <option>Just exploring options</option>
                    </select>
                    <FieldError message={fieldErrors.timeline} />
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1">
                <label
                    className="text-xs text-muted-foreground"
                    htmlFor="cf-details"
                >
                    Tell us about the deal
                </label>
                <textarea
                    id="cf-details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Address, purchase price, rehab budget, estimated value, and anything else we should know."
                    className={textareaClass(!!fieldErrors.details)}
                />
                <FieldError message={fieldErrors.details} />
            </div>

            {status === "error" && (
                <p className="text-xs text-destructive">
                    Something went wrong — please try again.
                </p>
            )}

            <Button
                variant="primary"
                type="submit"
                className="w-full"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Sending…" : "Submit deal summary"}
            </Button>

            <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by Begory Capital about
                potential loan options. This form does not create a loan
                application or approval.
            </p>
        </form>
    );
}
