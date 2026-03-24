"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "@/components/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function fmt(n: number) {
    return "$" + Math.round(n).toLocaleString();
}

type Field = { label: string; id: string; ph: string; step?: string };

const fields: Field[] = [
    { label: "Purchase price ($)", id: "rc-purchase", ph: "200000" },
    { label: "Down payment (%)", id: "rc-down", ph: "20" },
    { label: "Interest rate (%)", id: "rc-rate", ph: "6", step: "0.01" },
    { label: "Loan term (years)", id: "rc-term", ph: "30" },
    { label: "Closing costs + initial repairs ($)", id: "rc-closing", ph: "10000" },
    { label: "Monthly rent ($)", id: "rc-rent", ph: "2000" },
    { label: "Other monthly income ($)", id: "rc-other-inc", ph: "0" },
    { label: "Vacancy rate (%)", id: "rc-vacancy", ph: "5" },
    { label: "Management fee (% of rent)", id: "rc-mgmt", ph: "8" },
    { label: "Annual property tax ($)", id: "rc-tax", ph: "3000" },
    { label: "Annual insurance ($)", id: "rc-ins", ph: "1200" },
    { label: "Annual HOA / other fixed costs ($)", id: "rc-hoa", ph: "500" },
    { label: "Annual maintenance ($)", id: "rc-maint", ph: "2000" },
    { label: "Other annual expenses ($)", id: "rc-other-exp", ph: "0" },
];

export default function RentalCalculator() {
    const [vals, setVals] = useState<Record<string, string>>({});
    const [results, setResults] = useState<null | {
        loanAmount: number; monthlyPI: number; cashFlow: number;
        capRate: number; cashInvested: number; coc: number;
    }>(null);

    function set(id: string, v: string) {
        setVals(prev => ({ ...prev, [id]: v }));
    }
    function n(id: string) { return parseFloat(vals[id]) || 0; }

    function calculate() {
        const price = n("rc-purchase");
        const downAmt = price * n("rc-down") / 100;
        const loanAmount = Math.max(price - downAmt, 0);
        const rMonthly = n("rc-rate") > 0 ? (n("rc-rate") / 100) / 12 : 0;
        const nMonths = n("rc-term") * 12;
        let monthlyPI = 0;
        if (rMonthly > 0 && nMonths > 0) {
            const pow = Math.pow(1 + rMonthly, nMonths);
            monthlyPI = loanAmount * rMonthly * pow / (pow - 1);
        } else if (nMonths > 0) {
            monthlyPI = loanAmount / nMonths;
        }
        const gross = n("rc-rent") + n("rc-other-inc");
        const vacancy = gross * n("rc-vacancy") / 100;
        const mgmt = gross * n("rc-mgmt") / 100;
        const fixedMonthly = (n("rc-tax") + n("rc-ins") + n("rc-hoa") + n("rc-maint") + n("rc-other-exp")) / 12;
        const noi = gross - vacancy - mgmt - fixedMonthly;
        const cashFlow = noi - monthlyPI;
        const capRate = price > 0 ? (noi * 12 / price) * 100 : 0;
        const cashInvested = downAmt + n("rc-closing");
        const coc = cashInvested > 0 ? ((noi - monthlyPI) * 12 / cashInvested) * 100 : 0;
        setResults({ loanAmount, monthlyPI, cashFlow, capRate, cashInvested, coc });
    }

    return (
        <section id="rental-calculator" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge>RENTAL CALCULATOR</Badge>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                        Analyze a rental &amp; see if Begory can finance it.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Estimate cash flow, cap rate, and cash-on-cash return for any buy-and-hold property.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {fields.map(({ label, id, ph, step }) => (
                            <div key={id} className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor={id}>{label}</label>
                                <Input
                                    id={id}
                                    type="number"
                                    placeholder={ph}
                                    step={step}
                                    value={vals[id] ?? ""}
                                    onChange={e => set(id, e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                        ))}
                        <div className="flex flex-col gap-1 col-start-2 sm:col-start-3 lg:col-start-4">
                            <span className="text-xs invisible">_</span>
                            <Button variant="primary" onClick={calculate} className="w-full">Run rental analysis</Button>
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground">Estimates only — not a commitment to lend.</p>

                    {results && (
                        <div className="border-t border-border pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                                { label: "Loan amount", value: fmt(results.loanAmount) },
                                { label: "Monthly mortgage (P&I)", value: fmt(results.monthlyPI) },
                                { label: "Monthly cash flow", value: fmt(results.cashFlow) + " / mo" },
                                { label: "Cap rate", value: results.capRate.toFixed(1) + "%" },
                                { label: "Cash invested", value: fmt(results.cashInvested) },
                                { label: "Cash-on-cash return", value: results.coc.toFixed(1) + "%" },
                            ].map(({ label, value }) => (
                                <div key={label} className="rounded-xl border border-border bg-background px-3 py-2">
                                    <div className="text-xs text-muted-foreground">{label}</div>
                                    <div className="text-base font-semibold text-foreground">{value}</div>
                                </div>
                            ))}
                            {results && (
                                <div className="flex items-center justify-between gap-4 border-t border-border pt-3">
                                    <p className="text-sm text-muted-foreground">Want to move forward on this deal?</p>
                                    <Button variant="primary" size="sm" asChild>
                                        <Link href={`/contact?deal=rental&purchase=${vals["rc-purchase"]}&down=${vals["rc-down"]}&rate=${vals["rc-rate"]}&rent=${vals["rc-rent"]}&cashFlow=${Math.round(results.cashFlow)}&capRate=${results.capRate.toFixed(1)}&coc=${results.coc.toFixed(1)}`}>
                                            Discuss this deal →
                                        </Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
