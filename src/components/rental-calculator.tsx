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
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Badge>RENTAL CALCULATOR</Badge>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    Analyze a rental &amp; see if Begory can finance it.
                </h2>
                <p className="text-sm text-muted-foreground">
                    We estimate cash flow, cap rate, and cash-on-cash return. Include your contact info and this becomes a live deal we can follow up on.
                </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4">
                <div className="text-sm font-semibold text-foreground">Investor &amp; property details</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="rc-name">Full name</label>
                        <Input id="rc-name" type="text" placeholder="Your name" autoComplete="name" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="rc-email">Email</label>
                        <Input id="rc-email" type="email" placeholder="you@example.com" autoComplete="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="rc-phone">Phone</label>
                        <Input id="rc-phone" type="tel" placeholder="551-332-8570" autoComplete="tel" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-muted-foreground" htmlFor="rc-area">Property city / area</label>
                        <Input id="rc-area" type="text" placeholder="City, state or neighborhood" autoComplete="off" />
                    </div>
                </div>
            </div>
        </div>
    );
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

function Right() {
    const [vals, setVals] = useState<Record<string, string>>({});
    const [results, setResults] = useState<null | {
        loanAmount: number;
        monthlyPI: number;
        cashFlow: number;
        capRate: number;
        cashInvested: number;
        coc: number;
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
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-4">
            <div className="text-sm font-semibold text-foreground">Rental assumptions</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            </div>

            <Button variant="primary" onClick={calculate}>Run rental analysis</Button>

            <p className="text-xs text-muted-foreground">
                This is an estimate only. Begory Capital can review the real lease, taxes, and insurance to confirm numbers.
            </p>

            {results && (
                <div className="border-t border-border pt-4 flex flex-col gap-2">
                    <div className="text-sm font-semibold text-foreground">Estimated rental summary</div>
                    <div className="grid grid-cols-2 gap-2">
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default function RentalCalculator() {
    return (
        <section id="rental-calculator">
            <SplitLayout left={<Left />} right={<Right />} ratio="45-55" />
        </section>
    );
}
