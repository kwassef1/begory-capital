"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ContactType = "borrower" | "investor";

const selectClass = "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
const textareaClass = "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none";

export default function ContactForm() {
    const [type, setType] = useState<ContactType>("borrower");

    return (
        <form className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4 h-full">
            {/* Type toggle */}
            <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground">I&apos;m reaching out about</label>
                <div className="flex rounded-lg border border-border overflow-hidden text-sm font-medium">
                    <button
                        type="button"
                        onClick={() => setType("borrower")}
                        className={`flex-1 px-4 py-2 transition-colors ${type === "borrower" ? "bg-foreground text-white" : "bg-card text-muted-foreground hover:text-foreground"}`}
                    >
                        Getting a loan
                    </button>
                    <button
                        type="button"
                        onClick={() => setType("investor")}
                        className={`flex-1 px-4 py-2 transition-colors border-l border-border ${type === "investor" ? "bg-foreground text-white" : "bg-card text-muted-foreground hover:text-foreground"}`}
                    >
                        Investing capital
                    </button>
                </div>
            </div>

            {/* Shared fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-muted-foreground" htmlFor="cf-name">Full name</label>
                    <Input id="cf-name" type="text" placeholder="Your name" autoComplete="name" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-muted-foreground" htmlFor="cf-email">Email</label>
                    <Input id="cf-email" type="email" placeholder="you@example.com" autoComplete="email" />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-xs text-muted-foreground" htmlFor="cf-phone">Phone</label>
                    <Input id="cf-phone" type="tel" placeholder="551-332-8570" autoComplete="tel" />
                </div>
            </div>

            {/* Borrower fields */}
            {type === "borrower" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="cf-property-type">Property type</label>
                        <select id="cf-property-type" className={selectClass}>
                            <option>Single-family residence</option>
                            <option>2–4 unit</option>
                            <option>Multifamily (5+ units)</option>
                            <option>Mixed-use</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="cf-purpose">Loan purpose</label>
                        <select id="cf-purpose" className={selectClass}>
                            <option>Purchase</option>
                            <option>Refinance</option>
                            <option>Cash-out refinance</option>
                            <option>Fix &amp; flip</option>
                            <option>Bridge</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 sm:col-span-2">
                        <label className="text-xs text-muted-foreground" htmlFor="cf-timeline">Desired closing timeline</label>
                        <select id="cf-timeline" className={selectClass}>
                            <option>7–10 days</option>
                            <option>2–3 weeks</option>
                            <option>30+ days</option>
                            <option>Just exploring options</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Investor fields */}
            {type === "investor" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="cf-amount">Investment range</label>
                        <select id="cf-amount" className={selectClass}>
                            <option>Under $100k</option>
                            <option>$100k – $250k</option>
                            <option>$250k – $500k</option>
                            <option>$500k – $1M</option>
                            <option>$1M+</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="cf-investor-type">Investor type</label>
                        <select id="cf-investor-type" className={selectClass}>
                            <option>Individual investor</option>
                            <option>Self-directed IRA</option>
                            <option>Business / entity</option>
                            <option>Family office</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Details */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground" htmlFor="cf-details">
                    {type === "borrower" ? "Tell us about the deal" : "Anything you'd like us to know"}
                </label>
                <textarea
                    id="cf-details"
                    rows={4}
                    placeholder={
                        type === "borrower"
                            ? "Address, purchase price, rehab budget, estimated value, and anything else we should know."
                            : "Investment goals, timeline, questions, or anything else..."
                    }
                    className={textareaClass}
                />
            </div>

            <Button variant="primary" type="submit" className="w-full">
                {type === "borrower" ? "Submit deal summary" : "Request investor information"}
            </Button>

            <p className="text-xs text-muted-foreground">
                {type === "borrower"
                    ? "By submitting, you agree to be contacted by Begory Capital about potential loan options. This form does not create a loan application or approval."
                    : "By submitting, you agree to be contacted by Begory Capital regarding investment opportunities. This does not constitute an offer to sell or solicitation of any security."}
            </p>
        </form>
    );
}
