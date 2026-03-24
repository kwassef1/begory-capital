import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import Card from "@/components/card";
import SplitLayout from "@/components/split";
import SmoothScrollLink from "@/components/smooth-scroll-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "About Begory Capital — Private Real Estate Lending",
    description:
        "Begory Capital is a private real estate lender serving investors in New York and New Jersey. Learn about our story, mission, and lending philosophy.",
};

const values = [
    {
        title: "Asset-first underwriting",
        body: "We evaluate the property, the plan, and the numbers — not just a credit score or a W-2. If the deal makes sense, we find a way to fund it.",
    },
    {
        title: "Transparent terms",
        body: "No surprise fees at the closing table. We walk you through every line before you sign and stay available through the entire process.",
    },
    {
        title: "Speed that respects your contract",
        body: "We know what contract dates mean. Our process is built to move fast without cutting corners on the things that protect both sides of the deal.",
    },
    {
        title: "Relationships over transactions",
        body: "The majority of our loans go to repeat borrowers. We invest in understanding your strategy so we can be a better partner on every deal.",
    },
];

const stats = [
    { value: "10+", label: "Years in real estate & lending" },
    { value: "$150k–$5M", label: "Loan sizes funded" },
    { value: "72%", label: "Repeat borrower rate" },
    { value: "7–21 days", label: "Typical closing window" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center text-center">
                        <Badge>INTO BEGORY</Badge>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            Built for real estate investors, by people who understand the deal.
                        </h1>
                        <p className="text-base text-muted-foreground">
                            Begory Capital was founded to fill the gap between slow institutional lenders
                            and unreliable hard money. We built a lending business around what real estate
                            investors actually need — fast decisions, honest communication, and capital
                            that closes on time.
                        </p>
                    </div>
                </section>

                {/* Stats strip */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map(({ value, label }) => (
                            <Card key={label} className="p-5 flex flex-col gap-1 items-center text-center">
                                <div className="text-2xl font-semibold text-foreground">{value}</div>
                                <div className="text-xs text-muted-foreground">{label}</div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Story + Philosophy */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <SplitLayout
                        bare
                        ratio="55-45"
                        left={
                            <div className="flex flex-col gap-4">
                                <Badge>OUR STORY</Badge>
                                <h2 className="text-2xl font-semibold text-foreground leading-snug">
                                    We started lending because we lived on the borrower side of the table.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Before Begory Capital, our team spent years inside the real estate industry —
                                    acquiring properties, managing renovations, and navigating lease-ups. We knew
                                    firsthand how much a lender&apos;s decision-making speed and communication could
                                    make or break a deal.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    We built Begory Capital to be the lender we always wished existed: one that
                                    understood contracts, appraisals, and construction draws — and that treated
                                    every file like its own investment.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Today, we fund fix-and-flip, bridge, and DSCR loans for investors across
                                    New York, New Jersey, and surrounding markets. We&apos;re a relationship-first
                                    shop, and most of our business comes from repeat borrowers and the people
                                    they refer.
                                </p>
                            </div>
                        }
                        right={
                            <Card variant="dark" className="rounded-3xl p-7 flex flex-col gap-5">
                                <div className="text-xs uppercase tracking-wider text-gray-400">
                                    OUR PHILOSOPHY
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 leading-snug">
                                    We don&apos;t gamble on people.
                                    <br />
                                    We lend against property.
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Every deal is evaluated on the numbers — purchase price, rehab budget,
                                    after-repair value, and exit strategy. This discipline is what lets us
                                    move fast and still protect both the borrower and ourselves.
                                </p>
                                <div className="flex flex-col gap-2 mt-auto">
                                    {[
                                        "No speculation — only asset-backed loans",
                                        "Conservative LTV ratios on every deal",
                                        "Every file reviewed by a real decision-maker",
                                    ].map((line) => (
                                        <div key={line} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="text-primary mt-0.5 shrink-0">✔</span>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        }
                    />
                </section>

                {/* Values */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Badge>HOW WE WORK</Badge>
                            <h2 className="text-2xl font-semibold text-foreground leading-snug">
                                Four things we don&apos;t compromise on.
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {values.map(({ title, body }) => (
                                <Card key={title} className="p-6 flex flex-col gap-2">
                                    <div className="text-sm font-semibold text-foreground">{title}</div>
                                    <p className="text-sm text-muted-foreground">{body}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Network */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Card variant="dark" className="rounded-3xl p-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-1.5">
                            <div className="text-xs uppercase tracking-wider text-gray-400">OUR NETWORK</div>
                            <h2 className="text-xl font-semibold text-gray-100">
                                Beyond Begory, we work with a tight network of professionals.
                            </h2>
                            <p className="text-sm text-gray-400">
                                When you borrow with Begory Capital, you get access to relationships we&apos;ve
                                built over years in the NY and NJ markets.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Real estate attorneys", "Title companies", "Appraisers & inspectors", "Licensed brokers (NY & NJ)", "Construction professionals"].map((p) => (
                                <span
                                    key={p}
                                    className="px-3 py-1.5 rounded-full border border-white/10 text-sm text-gray-300"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </Card>
                </section>

                {/* CTA */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
                    <Card variant="dark" className="rounded-3xl px-8 py-10 text-center flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-semibold text-gray-100">
                            Ready to work with a lender who gets it?
                        </h2>
                        <p className="text-sm text-gray-400 max-w-md">
                            Tell us about your deal and we&apos;ll respond with structure options, estimated
                            terms, and next steps — usually within 24 hours.
                        </p>
                        <Button variant="primary" size="lg" asChild>
                            <SmoothScrollLink href="/contact">Start a conversation</SmoothScrollLink>
                        </Button>
                    </Card>
                </section>

            </main>
            <Footer />
        </div>
    );
}
