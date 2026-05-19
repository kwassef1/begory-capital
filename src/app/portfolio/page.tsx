import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import Card from "@/components/card";
import SmoothScrollLink from "@/components/smooth-scroll-link";
import { Button } from "@/components/ui/button";
import PortfolioReel from "@/components/portfolio-reel";

export const metadata: Metadata = {
    title: "Our Portfolio — Begory Capital",
    description:
        "See examples of deals funded by Begory Capital — fix-and-flip, bridge, and DSCR loans across the nation.",
};

const deals = [
    {
        tag: "Fix & Flip",
        location: "Newark, NJ",
        headline: "3-unit multifamily — acquired distressed, sold stabilized",
        loanAmount: "$285,000",
        ltv: "78% of purchase",
        term: "12 months",
        outcome:
            "Renovated all 3 units, sold to owner-occupant at $415,000. Borrower netted ~$90k after costs.",
        highlights: [
            "Closed in 9 days",
            "Interest-only structure",
            "Draw schedule matched scope",
        ],
    },
    {
        tag: "Bridge Loan",
        location: "Jersey City, NJ",
        headline:
            "Mixed-use building — lease-up bridge while refinancing to perm",
        loanAmount: "$620,000",
        ltv: "70% of as-is value",
        term: "18 months",
        outcome:
            "Gave investor time to stabilize retail tenant and improve NOI before refinancing into a DSCR loan.",
        highlights: [
            "No prepayment penalty",
            "Rate lock at close",
            "Coordinated exit with DSCR lender",
        ],
    },
    {
        tag: "DSCR Rental",
        location: "Queens, NY",
        headline: "SFR buy-and-hold — no W-2 required, qualified on rent roll",
        loanAmount: "$480,000",
        ltv: "75% of appraised value",
        term: "30-year fixed",
        outcome:
            "Cash-out refinance funded acquisition of next investment property. DSCR of 1.28x at close.",
        highlights: [
            "No tax returns",
            "Underwritten on DSCR only",
            "Closed in 18 days",
        ],
    },
    {
        tag: "Fix & Flip",
        location: "Bronx, NY",
        headline: "2-family gut renovation — tight timeline, complex title",
        loanAmount: "$195,000",
        ltv: "80% of purchase + rehab",
        term: "9 months",
        outcome:
            "Navigated title issue that would have killed the deal at a bank. Closed in 11 days. Sold for $370,000.",
        highlights: [
            "Title issue resolved at close",
            "Full rehab draw schedule",
            "11-day close",
        ],
    },
    {
        tag: "Bridge Loan",
        location: "Hoboken, NJ",
        headline: "Condo conversion — bridge while units were being sold",
        loanAmount: "$900,000",
        ltv: "65% of projected sellout",
        term: "12 months",
        outcome:
            "Funded acquisition and light renovation of a 6-unit building mid-conversion. All units sold within 8 months.",
        highlights: [
            "Flexible paydown structure",
            "Partial release provisions",
            "No extension fee needed",
        ],
    },
    {
        tag: "DSCR Rental",
        location: "Brooklyn, NY",
        headline: "4-unit rental — cash-out to fund next acquisition",
        loanAmount: "$750,000",
        ltv: "70% of appraised value",
        term: "30-year ARM",
        outcome:
            "Borrower pulled out $180k equity to use as down payment on a 2nd rental. DSCR of 1.35x.",
        highlights: [
            "Cash-out refinance",
            "ARM product for lower rate",
            "Portfolio-friendly structure",
        ],
    },
];

const stats = [
    { value: "$50M+", label: "Capital deployed" },
    { value: "100+", label: "Deals funded" },
    { value: "7–21 days", label: "Avg. closing window" },
];

const tagColors: Record<string, string> = {
    "Fix & Flip": "bg-amber-50 text-amber-700 border-amber-200",
    "Bridge Loan": "bg-blue-50 text-blue-700 border-blue-200",
    "DSCR Rental": "bg-green-50 text-green-700 border-green-200",
};

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center text-center">
                        <Badge>OUR PORTFOLIO</Badge>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            Deals we&apos;ve funded. Results that speak for
                            themselves.
                        </h1>
                        <p className="text-base text-muted-foreground">
                            Below are representative examples of loans
                            we&apos;ve closed. Details are illustrative —
                            specific deal terms vary based on property,
                            borrower, and market conditions.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {stats.map(({ value, label }) => (
                            <Card
                                key={label}
                                className="p-5 flex flex-col gap-1 items-center text-center"
                            >
                                <div className="text-2xl font-semibold text-foreground">
                                    {value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {label}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Reel */}
                <PortfolioReel />

                {/* Deal grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {deals.map(
                            ({
                                tag,
                                location,
                                headline,
                                loanAmount,
                                ltv,
                                term,
                                outcome,
                                highlights,
                            }) => (
                                <Card
                                    key={headline}
                                    className="p-6 flex flex-col gap-4"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className={`px-2.5 py-1 rounded-full border text-xs font-medium ${tagColors[tag]}`}
                                        >
                                            {tag}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {location}
                                        </span>
                                    </div>

                                    <div>
                                        <div className="text-sm font-semibold text-foreground leading-snug">
                                            {headline}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            {
                                                label: "Loan",
                                                value: loanAmount,
                                            },
                                            { label: "LTV", value: ltv },
                                            { label: "Term", value: term },
                                        ].map(({ label, value }) => (
                                            <div
                                                key={label}
                                                className="flex flex-col gap-0.5"
                                            >
                                                <div className="text-xs text-muted-foreground">
                                                    {label}
                                                </div>
                                                <div className="text-xs font-semibold text-foreground">
                                                    {value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {outcome}
                                    </p>

                                    <div className="mt-auto flex flex-col gap-1.5">
                                        {highlights.map((h) => (
                                            <div
                                                key={h}
                                                className="flex items-center gap-2 text-xs text-muted-foreground"
                                            >
                                                <span className="text-primary shrink-0">
                                                    ✔
                                                </span>
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ),
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                    <Card
                        variant="dark"
                        className="rounded-3xl px-8 py-10 text-center flex flex-col items-center gap-4"
                    >
                        <h2 className="text-2xl font-semibold text-gray-100">
                            Have a deal that looks like one of these?
                        </h2>
                        <p className="text-sm text-gray-400 max-w-md">
                            Tell us the property, the plan, and the numbers.
                            We&apos;ll come back with structure options and
                            estimated terms — fast.
                        </p>
                        <Button variant="primary" size="lg" asChild>
                            <SmoothScrollLink href="/tools">
                                Calculate your deal
                            </SmoothScrollLink>
                        </Button>
                    </Card>
                </section>
            </main>
            <Footer />
        </div>
    );
}
