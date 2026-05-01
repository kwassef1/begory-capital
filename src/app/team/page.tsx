import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import Card from "@/components/card";
import SmoothScrollLink from "@/components/smooth-scroll-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Our Team — Begory Capital",
    description:
        "Meet the team behind Begory Capital. Real estate professionals with deep experience in private lending, acquisitions, and investment property.",
};

const team = [
    {
        name: "Team Member Name",
        title: "Founder & Managing Director",
        bio: "Replace with your actual bio. Focus on years of experience, markets covered, volume of deals closed, and what makes you different as a lender and real estate professional.",
        expertise: ["Fix & flip lending", "DSCR underwriting", "Acquisitions", "NY & NJ markets"],
    },
    {
        name: "Team Member Name",
        title: "Head of Underwriting",
        bio: "Replace with actual bio. Highlight underwriting background, asset types covered, and how this person evaluates deals — what they look for, what they've seen.",
        expertise: ["Loan structuring", "Property valuation", "Risk assessment", "Residential & mixed-use"],
    },
    {
        name: "Team Member Name",
        title: "Client Relations & Originations",
        bio: "Replace with actual bio. Great to emphasize borrower relationships, communication style, and how this person helps investors navigate from term sheet to close.",
        expertise: ["Borrower relationships", "Loan origination", "Deal sourcing", "Broker partnerships"],
    },
];

const partners = [
    "Real estate attorneys",
    "Title companies",
    "Appraisers & inspectors",
    "Licensed brokers (NY & NJ)",
    "Construction professionals",
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center text-center">
                        <Badge>OUR TEAM</Badge>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            People who understand real estate, not just lending.
                        </h1>
                        <p className="text-base text-muted-foreground">
                            Every person on the Begory Capital team has hands-on experience in real estate
                            — not just finance. That background shapes how we evaluate deals and communicate
                            with borrowers.
                        </p>
                    </div>
                </section>

                {/* Team cards */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map(({ name, title, bio, expertise }) => (
                            <Card key={name + title} className="p-6 flex flex-col gap-4">
                                {/* Avatar placeholder */}
                                <div className="w-16 h-16 rounded-full bg-foreground/8 flex items-center justify-center text-2xl font-semibold text-foreground">
                                    {name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-foreground">{name}</div>
                                    <div className="text-sm text-primary font-medium">{title}</div>
                                </div>
                                <p className="text-sm text-muted-foreground">{bio}</p>
                                <div className="mt-auto flex flex-col gap-2">
                                    <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
                                        Expertise
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {expertise.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full border border-border text-xs text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Network */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Card variant="dark" className="rounded-3xl p-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-1.5">
                            <div className="text-xs uppercase tracking-wider text-gray-400">OUR NETWORK</div>
                            <h2 className="text-xl font-semibold text-gray-100">
                                Beyond our team, we work with a tight network of professionals.
                            </h2>
                            <p className="text-sm text-gray-400">
                                When you borrow with Begory Capital, you get access to relationships we&apos;ve
                                built over years in the NY and NJ markets.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {partners.map((p) => (
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
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                        <div>
                            <div className="text-base font-semibold text-foreground">
                                Want to talk to someone directly?
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Call or email us — you&apos;ll reach a real person, not a call center.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <Button variant="outline" size="sm" asChild>
                                <a href="mailto:info@begorycapital.com">Email us</a>
                            </Button>
                            <Button variant="primary" size="sm" asChild>
                                <SmoothScrollLink href="/contact">Send a deal summary</SmoothScrollLink>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
