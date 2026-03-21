"use client";

import { useState } from "react";
import Badge from "@/components/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SplitLayout from "@/components/split";

function fmt(n: number) {
    return "$" + Math.round(n).toLocaleString();
}

function Left() {
    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-2">
                <Badge>FIX &amp; FLIP CALCULATOR</Badge>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    Estimate your flip and raise your hand as a lead.
                </h2>
                <p className="text-sm text-muted-foreground">
                    Enter a few numbers and we&apos;ll estimate total cost, profit, and ROI. Include your contact info to turn this into a live deal Begory Capital can follow up on.
                </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4 flex-1">
                <div className="text-sm font-semibold text-foreground">Investor &amp; deal contact</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="ff-name">Full name</label>
                        <Input id="ff-name" type="text" placeholder="Your name" autoComplete="name" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="ff-email">Email</label>
                        <Input id="ff-email" type="email" placeholder="you@example.com" autoComplete="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="ff-phone">Phone</label>
                        <Input id="ff-phone" type="tel" placeholder="551-332-8570" autoComplete="tel" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="ff-area">Property city / area</label>
                        <Input id="ff-area" type="text" placeholder="City, state or neighborhood" autoComplete="off" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Right() {
    const [purchase, setPurchase] = useState("");
    const [rehab, setRehab] = useState("");
    const [arv, setArv] = useState("");
    const [holdingMonths, setHoldingMonths] = useState("");
    const [closingCosts, setClosingCosts] = useState("");
    const [holdingPerMonth, setHoldingPerMonth] = useState("");
    const [results, setResults] = useState<null | {
        totalCost: number;
        profit: number;
        roi: number;
        costToArv: number;
    }>(null);

    function calculate() {
        const p = parseFloat(purchase) || 0;
        const r = parseFloat(rehab) || 0;
        const a = parseFloat(arv) || 0;
        const hm = parseFloat(holdingMonths) || 0;
        const cc = parseFloat(closingCosts) || 0;
        const hpm = parseFloat(holdingPerMonth) || 0;

        const totalCost = p + r + cc + hm * hpm;
        const profit = a - totalCost;
        const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
        const costToArv = a > 0 ? (totalCost / a) * 100 : 0;
        setResults({ totalCost, profit, roi, costToArv });
    }

    return (
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4 h-full">
            <div className="text-sm font-semibold text-foreground">Deal assumptions</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                    { label: "Purchase price ($)", id: "ff-purchase", val: purchase, set: setPurchase, ph: "300000" },
                    { label: "Rehab / renovation budget ($)", id: "ff-rehab", val: rehab, set: setRehab, ph: "80000" },
                    { label: "After repair value — ARV ($)", id: "ff-arv", val: arv, set: setArv, ph: "480000" },
                    { label: "Holding period (months)", id: "ff-months", val: holdingMonths, set: setHoldingMonths, ph: "6" },
                    { label: "Closing & misc costs ($)", id: "ff-closing", val: closingCosts, set: setClosingCosts, ph: "12000" },
                    { label: "Holding costs / month ($)", id: "ff-hpm", val: holdingPerMonth, set: setHoldingPerMonth, ph: "1800" },
                ].map(({ label, id, val, set, ph }) => (
                    <div key={id} className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor={id}>{label}</label>
                        <Input id={id} type="number" placeholder={ph} value={val} onChange={e => set(e.target.value)} autoComplete="off" />
                    </div>
                ))}
            </div>

            <Button variant="primary" onClick={calculate}>Get my flip analysis</Button>

            <p className="text-xs text-muted-foreground">
                This tool is for estimates only and is not a commitment to lend.
            </p>

            {results && (
                <div className="border-t border-border pt-4 flex flex-col gap-2">
                    <div className="text-sm font-semibold text-foreground">Estimated flip summary</div>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { label: "Total project cost", value: fmt(results.totalCost) },
                            { label: "Estimated profit", value: fmt(results.profit) },
                            { label: "Estimated ROI", value: results.roi.toFixed(1) + "%" },
                            { label: "Cost as % of ARV", value: results.costToArv.toFixed(1) + "%" },
                        ].map(({ label, value }) => (
                            <div key={label} className="rounded-xl border border-border bg-background px-3 py-2">
                                <div className="text-xs text-muted-foreground">{label}</div>
                                <div className="text-base font-semibold text-foreground">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function FixFlipCalculator() {
    return (
        <section id="flip-calculator" className="scroll-mt-20">
            <SplitLayout left={<Left />} right={<Right />} ratio="45-55" align="stretch" />
        </section>
    );
}
