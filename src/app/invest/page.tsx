import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    {
        number: 2,
        title: "Your funds are deployed into first-lien mortgage loans",
    },
    { number: 3, title: "The borrower makes monthly interest payments" },
    { number: 4, title: "You receive consistent income backed by real estate" },
    {
        number: 5,
        title: "When the loan is repaid, capital is returned or redeployed",
    },
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
                            Begory Capital offers investors the opportunity to
                            earn strong, consistent returns by investing in
                            short-term, asset-backed real estate loans. Your
                            capital is deployed into first-lien loans secured by
                            U.S. real estate — not stocks, not crypto, and not
                            unsecured notes.
                        </p>
                        <div>
                            <Button variant="primary" size="lg" asChild>
                                <a href="#investor-form">
                                    Request Investor Information
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What We Do + How It Works */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-2 gap-7">
                        {/* What We Do */}
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Badge>WHAT WE DO</Badge>
                                <h2 className="text-xl font-semibold text-foreground">
                                    We originate and manage real estate loans.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    These loans are made to professional real
                                    estate investors purchasing and improving
                                    properties. Our role is to provide the
                                    capital — your role is to earn the yield.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Fix-and-flip loans",
                                    "Bridge loans",
                                    "Value-add real estate loans",
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Badge>HOW IT WORKS</Badge>
                                <h2 className="text-xl font-semibold text-foreground">
                                    A simple, transparent process.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    All loans are short-term (typically 6–12
                                    months) and secured by recorded mortgages.
                                </p>
                            </div>
                            <ol className="flex flex-col gap-3">
                                {steps.map(({ number, title }) => (
                                    <li
                                        key={number}
                                        className="grid grid-cols-[auto_1fr] gap-3 items-start"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-foreground/8 flex items-center justify-center text-xs font-semibold text-foreground shrink-0">
                                            {number}
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {title}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Protection + Why Us */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-2 gap-7">
                        {/* Your Protection */}
                        <div className="rounded-3xl bg-foreground text-gray-200 p-7 flex flex-col gap-5 shadow-lg">
                            <div>
                                <div className="text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                    YOUR PROTECTION
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100">
                                    Every dollar is backed by real property.
                                </h2>
                                <p className="text-sm text-gray-400 mt-1.5">
                                    We do not speculate. We lend against real
                                    property with real equity.
                                </p>
                            </div>
                            <ul className="flex flex-col gap-2.5">
                                {protections.map((p) => (
                                    <li
                                        key={p}
                                        className="flex items-start gap-2.5 text-sm text-gray-300"
                                    >
                                        <span className="text-primary mt-0.5">
                                            ✔
                                        </span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Investors + Who This Is For */}
                        <div className="flex flex-col gap-5">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-3">
                                <Badge>WHY INVESTORS CHOOSE US</Badge>
                                <ul className="grid grid-cols-2 gap-2">
                                    {reasons.map((r) => (
                                        <li
                                            key={r}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="text-primary shrink-0">
                                                •
                                            </span>
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-3">
                                <Badge>WHO THIS IS FOR</Badge>
                                <ul className="flex flex-col gap-1.5">
                                    {idealFor.map((i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="text-primary shrink-0">
                                                •
                                            </span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy + Underwriting */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="rounded-3xl bg-foreground px-8 py-10 grid md:grid-cols-[1.4fr_1fr] gap-8 md:items-center shadow-lg">
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
                                This disciplined approach is what allows us to
                                protect investor capital and deliver consistent
                                returns. Every deal is evaluated on the numbers,
                                not on hope.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {underwritingFactors.map(({ label, icon }) => (
                                <div
                                    key={label}
                                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex flex-col gap-1"
                                >
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-sm text-gray-300 font-medium">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Investor form */}
                <section
                    id="investor-form"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16"
                >
                    <div className="grid md:grid-cols-2 gap-7 items-start">
                        {/* Left — context */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Badge>GET STARTED</Badge>
                                <h2 className="text-2xl font-semibold text-foreground leading-snug">
                                    Your capital deserves more than a bank
                                    account.
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Let it work for you — secured by real
                                    estate. Share your details and we&apos;ll
                                    send over investor materials and schedule a
                                    call with our team.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col gap-2 text-sm">
                                <div>
                                    <span className="font-medium text-foreground">
                                        Phone:
                                    </span>{" "}
                                    <a
                                        href="tel:+15513328570"
                                        className="text-muted-foreground hover:text-primary transition"
                                    >
                                        551-332-8570
                                    </a>
                                </div>
                                <div>
                                    <span className="font-medium text-foreground">
                                        Email:
                                    </span>{" "}
                                    <a
                                        href="mailto:info@begorycapital.com"
                                        className="text-muted-foreground hover:text-primary transition"
                                    >
                                        info@begorycapital.com
                                    </a>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                This form does not constitute an offer to sell
                                or solicitation of an offer to buy any security.
                                All investments are subject to risk and investor
                                qualification.
                            </p>
                        </div>

                        {/* Right — form */}
                        <form className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1">
                                    <label
                                        className="text-xs text-muted-foreground"
                                        htmlFor="inv-name"
                                    >
                                        Full name
                                    </label>
                                    <Input id="inv-name" type="text" placeholder="Your name" autoComplete="name" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-muted-foreground" htmlFor="inv-email">Email</label>
                                    <Input id="inv-email" type="email" placeholder="you@example.com" autoComplete="email" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-muted-foreground" htmlFor="inv-phone">Phone</label>
                                    <Input id="inv-phone" type="tel" placeholder="551-332-8570" autoComplete="tel" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label
                                        className="text-xs text-muted-foreground"
                                        htmlFor="inv-amount"
                                    >
                                        Investment range
                                    </label>
                                    <select
                                        id="inv-amount"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        <option>Under $100k</option>
                                        <option>$100k – $250k</option>
                                        <option>$250k – $500k</option>
                                        <option>$500k – $1M</option>
                                        <option>$1M+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    className="text-xs text-muted-foreground"
                                    htmlFor="inv-investor-type"
                                >
                                    Investor type
                                </label>
                                <select
                                    id="inv-investor-type"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option>Individual investor</option>
                                    <option>Self-directed IRA</option>
                                    <option>Business / entity</option>
                                    <option>Family office</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    className="text-xs text-muted-foreground"
                                    htmlFor="inv-message"
                                >
                                    Anything you&apos;d like us to know
                                </label>
                                <textarea
                                    id="inv-message"
                                    rows={3}
                                    placeholder="Investment goals, timeline, questions, or anything else..."
                                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                                />
                            </div>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-full"
                            >
                                Request Investor Information
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                By submitting, you agree to be contacted by
                                Begory Capital regarding investment
                                opportunities.
                            </p>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
