import Badge from "@/components/badge";
import SplitLayout from "@/components/split";

const values = [
    {
        title: "Common-sense decisions",
        body: "We look at the story of the deal, not just a checkbox matrix. If the numbers work, we fight for the file.",
    },
    {
        title: "Transparent terms",
        body: "Fees, rates, and structure are walked through with you and your team — no surprise wire instructions at the table.",
    },
    {
        title: "Responsive communication",
        body: "Direct access to a real decision-maker. Calls returned. Emails answered. Files actually moved.",
    },
];

const pills = ["Agent partnerships", "Loan officers welcome", "Broker-friendly"];

function Left() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Badge>WHY BEGORY</Badge>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    A lending partner who lives in your world.
                </h2>
                <p className="text-sm text-muted-foreground">
                    Begory Capital understands contracts, appraisals, leases, and construction draws. We speak investor, not just bank.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
                {values.map(({ title, body }) => (
                    <div
                        key={title}
                        className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card p-4 shadow-sm"
                    >
                        <div className="text-sm font-semibold text-foreground">{title}</div>
                        <p className="text-sm text-muted-foreground">{body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Right() {
    return (
        <div className="rounded-3xl bg-foreground text-gray-200 p-6 grid md:grid-cols-[2fr_1.3fr] gap-5 md:items-center shadow-lg">
            <div>
                <div className="text-4xl leading-none text-primary mb-2">&ldquo;</div>
                <p className="text-sm leading-relaxed">
                    Every other lender told my client no. Begory Capital understood the deal, found a path, and closed the loan on time. They didn&apos;t overcomplicate it — they just executed.
                </p>
                <div className="mt-3 text-sm font-medium">Realtor Name Here</div>
                <div className="text-xs text-gray-400">NY &amp; NJ Real Estate Agent</div>
            </div>
            <div>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Replace this with your strongest success story — an &ldquo;impossible&rdquo; loan you closed. Agents and investors remember real stories more than rate sheets.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {pills.map((pill) => (
                        <span
                            key={pill}
                            className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-300"
                        >
                            {pill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function WhyBegory() {
    return (
        <section id="why">
            <SplitLayout left={<Left />} right={<Right />} ratio="55-45" />
        </section>
    );
}
