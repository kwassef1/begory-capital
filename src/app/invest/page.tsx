import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import Card from "@/components/card";
import SplitLayout from "@/components/split";
import { Button } from "@/components/ui/button";
import SmoothScrollLink from "@/components/smooth-scroll-link";

export const metadata: Metadata = {
    title: "Invest with Us — Earn Passive Income Backed by Real Estate",
    description:
        "Invest capital with Begory Capital and earn consistent returns secured by first-lien real estate loans in New York and New Jersey.",
    openGraph: {
        title: "Invest with Begory Capital | Real Estate-Backed Returns",
        description:
            "Earn passive income secured by first-lien real estate loans. Short-term, asset-backed opportunities for accredited investors.",
        url: "https://begorycapital.com/invest",
        type: "website",
    },
    twitter: {
        title: "Invest with Begory Capital | Real Estate-Backed Returns",
        description:
            "Earn passive income secured by first-lien real estate loans. Short-term, asset-backed opportunities for accredited investors.",
    },
};

const protections = [
    "First mortgage liens",
    "Conservative loan-to-value ratios",
    "Properties purchased below market value",
    "Professional underwriting",
    "Active loan monitoring",
    "Defined exit strategies (sale or refinance)",
];

const reasons = [
    "Real estate–backed security",
    "Monthly cash flow",
    "Short-term capital cycles",
    "Lower risk than stocks or unsecured lending",
    "Professional management",
    "Transparent reporting",
];

const idealFor = [
    "High-net-worth individuals",
    "Self-directed IRA investors",
    "Business owners",
    "Anyone seeking passive income with collateral protection",
];

const underwritingFactors = [
    { label: "Property value", icon: "🏠" },
    { label: "Purchase price", icon: "💵" },
    { label: "Renovation budget", icon: "🔨" },
    { label: "Exit strategy", icon: "📋" },
];

const steps = [
    { number: 1, title: "You invest capital with Begory Capital" },
    { number: 2, title: "Your funds are deployed into first-lien mortgage loans" },
    { number: 3, title: "The borrower makes monthly interest payments" },
    { number: 4, title: "You receive consistent income backed by real estate" },
    { number: 5, title: "When the loan is repaid, capital is returned or redeployed" },
];

export default function InvestPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center text-center">
                        <Badge>INVEST WITH US</Badge>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            Earn Passive Income Secured by Real Estate
                        </h1>
                        <p className="text-base text-muted-foreground">
                            Begory Capital offers investors the opportunity to earn strong, consistent
                            returns by investing in short-term, asset-backed real estate loans. Your
                            capital is deployed into first-lien loans secured by U.S. real estate —
                            not stocks, not crypto, and not unsecured notes.
                        </p>
                        <Button variant="primary" size="lg" asChild>
                            <SmoothScrollLink href="/contact#investor-form">Request Investor Information</SmoothScrollLink>
                        </Button>
                    </div>
                </section>

                {/* What We Do + How It Works */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-2 gap-7">
                        <Card className="p-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Badge>WHAT WE DO</Badge>
                                <h2 className="text-xl font-semibold text-foreground">
                                    We originate and manage real estate loans.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    These loans are made to professional real estate investors
                                    purchasing and improving properties. Our role is to provide
                                    the capital — your role is to earn the yield.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Fix-and-flip loans", "Bridge loans", "Value-add real estate loans"].map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Badge>HOW IT WORKS</Badge>
                                <h2 className="text-xl font-semibold text-foreground">
                                    A simple, transparent process.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    All loans are short-term (typically 6–12 months) and secured
                                    by recorded mortgages.
                                </p>
                            </div>
                            <ol className="flex flex-col gap-3">
                                {steps.map(({ number, title }) => (
                                    <li key={number} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                                        <div className="w-6 h-6 rounded-full bg-foreground/8 flex items-center justify-center text-xs font-semibold text-foreground shrink-0">
                                            {number}
                                        </div>
                                        <span className="text-sm text-muted-foreground">{title}</span>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </div>
                </section>

                {/* Protection + Why Us */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-2 gap-7">
                        <Card variant="dark" className="rounded-3xl p-7 flex flex-col gap-5">
                            <div>
                                <div className="text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                    YOUR PROTECTION
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Every dollar is backed by real property.
                                </h2>
                                <p className="text-sm text-gray-400 mt-1.5">
                                    We do not speculate. We lend against real property with real equity.
                                </p>
                            </div>
                            <ul className="flex flex-col gap-2.5">
                                {protections.map((p) => (
                                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <span className="text-primary mt-0.5">✔</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <div className="flex flex-col gap-5">
                            <Card className="p-6 flex flex-col gap-3">
                                <Badge>WHY INVESTORS CHOOSE US</Badge>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {reasons.map((r) => (
                                        <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary shrink-0">•</span>
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card className="p-6 flex flex-col gap-3">
                                <Badge>WHO THIS IS FOR</Badge>
                                <ul className="flex flex-col gap-1.5">
                                    {idealFor.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Philosophy — full-width dark card with bare SplitLayout inside */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Card variant="dark" className="rounded-3xl">
                        <SplitLayout
                            bare
                            ratio="60-40"
                            className="px-8 py-10"
                            left={
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                                        OUR PHILOSOPHY
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-100 leading-snug">
                                        We don&apos;t gamble on people.
                                        <br />
                                        We lend against property.
                                    </h2>
                                    <p className="mt-3 text-sm text-gray-400">
                                        This disciplined approach is what allows us to protect investor
                                        capital and deliver consistent returns. Every deal is evaluated
                                        on the numbers, not on hope.
                                    </p>
                                </div>
                            }
                            right={
                                <div className="grid grid-cols-2 gap-3">
                                    {underwritingFactors.map(({ label, icon }) => (
                                        <div
                                            key={label}
                                            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex flex-col gap-1"
                                        >
                                            <span className="text-xl">{icon}</span>
                                            <span className="text-sm text-gray-300 font-medium">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                    </Card>
                </section>

                {/* CTA */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
                    <Card variant="dark" className="rounded-3xl px-8 py-10 text-center flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-semibold text-gray-100">
                            Ready to put your capital to work?
                        </h2>
                        <p className="text-sm text-gray-400 max-w-md">
                            Share your details and we&apos;ll send over investor materials and schedule
                            a call with our team.
                        </p>
                        <Button variant="primary" size="lg" asChild>
                            <SmoothScrollLink href="/contact#investor-form">
                                Request Investor Information
                            </SmoothScrollLink>
                        </Button>
                    </Card>
                </section>

            </main>
            <Footer />
        </div>
    );
}
