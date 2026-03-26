"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "@/components/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function fmt(n: number) {
    return "$" + Math.round(n).toLocaleString();
}

const fields = [
    { label: "Purchase price ($)", id: "ff-purchase", ph: "300000" },
    { label: "Rehab / renovation budget ($)", id: "ff-rehab", ph: "80000" },
    { label: "After repair value — ARV ($)", id: "ff-arv", ph: "480000" },
    { label: "Holding period (months)", id: "ff-months", ph: "6" },
    { label: "Closing & misc costs ($)", id: "ff-closing", ph: "12000" },
    { label: "Holding costs / month ($)", id: "ff-hpm", ph: "1800" },
];

export default function FixFlipCalculator() {
    const [vals, setVals] = useState<Record<string, string>>({});
    const [results, setResults] = useState<null | {
        totalCost: number;
        profit: number;
        roi: number;
        costToArv: number;
    }>(null);

    function set(id: string, v: string) {
        setVals((prev) => ({ ...prev, [id]: v }));
    }
    function n(id: string) {
        return parseFloat(vals[id]) || 0;
    }

    function calculate() {
        const p = n("ff-purchase"),
            r = n("ff-rehab"),
            a = n("ff-arv");
        const hm = n("ff-months"),
            cc = n("ff-closing"),
            hpm = n("ff-hpm");
        const totalCost = p + r + cc + hm * hpm;
        const profit = a - totalCost;
        const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
        const costToArv = a > 0 ? (totalCost / a) * 100 : 0;
        setResults({ totalCost, profit, roi, costToArv });
    }

    return (
        <section
            id="flip-calculator"
            className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16"
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge>FIX &amp; FLIP CALCULATOR</Badge>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                        Estimate your flip profit &amp; ROI.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Enter a few numbers and we&apos;ll estimate total cost,
                        profit, and return on investment.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {fields.map(({ label, id, ph }) => (
                            <div key={id} className="flex flex-col gap-1">
                                <label
                                    className="text-xs text-muted-foreground"
                                    htmlFor={id}
                                >
                                    {label}
                                </label>
                                <Input
                                    id={id}
                                    type="number"
                                    placeholder={ph}
                                    value={vals[id] ?? ""}
                                    onChange={(e) => set(id, e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                        ))}
                        <div className="col-span-full flex items-center justify-between gap-4">
                            <p className="text-xs text-muted-foreground">Estimates only — not a commitment to lend.</p>
                            <Button variant="soft" onClick={calculate}>
                                Get my flip analysis
                            </Button>
                        </div>
                    </div>

                    {results && (
                        <div className="border-t border-border pt-4 flex flex-col gap-3">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    {
                                        label: "Total project cost",
                                        value: fmt(results.totalCost),
                                    },
                                    {
                                        label: "Estimated profit",
                                        value: fmt(results.profit),
                                    },
                                    {
                                        label: "Estimated ROI",
                                        value: results.roi.toFixed(1) + "%",
                                    },
                                    {
                                        label: "Cost as % of ARV",
                                        value:
                                            results.costToArv.toFixed(1) + "%",
                                    },
                                ].map(({ label, value }) => (
                                    <div
                                        key={label}
                                        className="rounded-xl border border-border bg-background px-3 py-2"
                                    >
                                        <div className="text-xs text-muted-foreground">
                                            {label}
                                        </div>
                                        <div className="text-base font-semibold text-foreground">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t border-border pt-3">
                                <p className="text-sm text-muted-foreground">
                                    Want to move forward on this deal?
                                </p>
                                <Button variant="primary" asChild>
                                    <Link
                                        href={`/contact?deal=flip&purchase=${vals["ff-purchase"]}&rehab=${vals["ff-rehab"]}&arv=${vals["ff-arv"]}&months=${vals["ff-months"]}&closing=${vals["ff-closing"]}&hpm=${vals["ff-hpm"]}&totalCost=${Math.round(results.totalCost)}&profit=${Math.round(results.profit)}&roi=${results.roi.toFixed(1)}`}
                                    >
                                        Discuss this deal →
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
