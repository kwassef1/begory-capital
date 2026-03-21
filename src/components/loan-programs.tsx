import Badge from "@/components/badge";

const programs = [
    {
        tag: "Fix & Flip",
        title: "Short-term rehab loans",
        body: "Finance purchase and rehab costs with draws matched to your scope of work.",
        bullets: [
            "Up to 85% of purchase + rehab",
            "Interest-only payments",
            "12–18 month terms",
        ],
        bestFor: "Investors adding value and exiting quickly.",
    },
    {
        tag: "Rental / DSCR",
        title: "Long-term rental loans",
        body: "30-year fixed or ARM loans based primarily on property cash flow — not your W-2.",
        bullets: [
            "1–20 unit properties",
            "DSCR-based underwriting",
            "Rate & term or cash-out",
        ],
        bestFor: "Buy-and-hold investors building cash flow.",
    },
    {
        tag: "Bridge & Small Balance",
        title: "Bridge & small commercial",
        body: "Transitional financing for properties in lease-up, repositioning, or value-add phases.",
        bullets: [
            "Flexible terms up to 24 months",
            "Mixed-use & small multifamily",
            "Cash-out for future projects",
        ],
        bestFor: "Investors needing time to stabilize then refinance or sell.",
    },
];

export default function LoanPrograms() {
    return (
        <section id="loan-programs">
            <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-1.5 mb-9 max-w-2xl">
                    <Badge>LOAN PROGRAMS</Badge>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                        Funding designed for real estate investors.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Whether you&apos;re flipping your first property or scaling a rental portfolio, we structure loans that fit your strategy.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {programs.map(({ tag, title, body, bullets, bestFor }) => (
                        <article
                            key={tag}
                            className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card p-5 shadow-sm"
                        >
                            <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                {tag}
                            </div>
                            <h3 className="text-base font-semibold text-foreground">{title}</h3>
                            <p className="text-sm text-muted-foreground">{body}</p>
                            <ul className="mt-1 list-disc pl-4 flex flex-col gap-0.5">
                                {bullets.map((b) => (
                                    <li key={b} className="text-sm text-muted-foreground">
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2">
                                <div className="text-xs text-muted-foreground">Best for</div>
                                <div className="text-base font-semibold text-foreground">{bestFor}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
