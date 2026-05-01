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

const selectClass =
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
const textareaClass =
    "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none";

export default function ContactForm() {
    const [details, setDetails] = useState("");
    const params = useSearchParams();

    useEffect(() => {
        if (params.get("deal")) {
            setDetails(buildDealSummary(params));
        }
    }, [params]);

    return (
        <form className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-foreground">
                    Submit a deal summary
                </h2>
                <p className="text-sm text-muted-foreground">
                    Tell us about the property and your timeline — we'll be in
                    touch.
                </p>
            </div>

            {/* Contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-name"
                    >
                        Full name
                    </label>
                    <Input
                        id="cf-name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                    />
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
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                    />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-phone"
                    >
                        Phone
                    </label>
                    <Input
                        id="cf-phone"
                        type="tel"
                        placeholder="Best number to reach you"
                        autoComplete="tel"
                    />
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
                    <select id="cf-property-type" className={selectClass}>
                        <option>Single-family residence</option>
                        <option>2–4 unit</option>
                        <option>Multifamily (5+ units)</option>
                        <option>Mixed-use</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-purpose"
                    >
                        Loan purpose
                    </label>
                    <select id="cf-purpose" className={selectClass}>
                        <option>Purchase</option>
                        <option>Refinance</option>
                        <option>Cash-out refinance</option>
                        <option>Fix &amp; flip</option>
                        <option>Bridge</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                    <label
                        className="text-xs text-muted-foreground"
                        htmlFor="cf-timeline"
                    >
                        Desired closing timeline
                    </label>
                    <select id="cf-timeline" className={selectClass}>
                        <option>7–10 days</option>
                        <option>2–3 weeks</option>
                        <option>30+ days</option>
                        <option>Just exploring options</option>
                    </select>
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
                    className={textareaClass}
                />
            </div>

            <Button variant="primary" type="submit" className="w-full">
                Submit deal summary
            </Button>

            <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by Begory Capital about
                potential loan options. This form does not create a loan
                application or approval.
            </p>
        </form>
    );
}
