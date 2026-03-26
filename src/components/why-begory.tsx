import Badge from "@/components/badge";
import Card from "@/components/card";
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

const pills = [
    "Agent partnerships",
    "Loan officers welcome",
    "Broker-friendly",
];

function Left() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Badge>WHY BEGORY</Badge>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    A lending partner who lives in your world.
                </h2>
                <p className="text-sm text-muted-foreground">
                    Begory Capital understands contracts, appraisals, leases,
                    and construction draws. We speak investor, not just bank.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
                {values.map(({ title, body }) => (
                    <Card key={title} className="p-4 flex flex-col gap-1.5">
                        <div className="text-sm font-semibold text-foreground">
                            {title}
                        </div>
                        <p className="text-sm text-muted-foreground">{body}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function Right() {
    return (
        <Card variant="dark" className="relative overflow-hidden rounded-3xl p-6 flex flex-col gap-5">
            {/* Decorative oversized background quote mark */}
            <span
                aria-hidden
                className="pointer-events-none select-none absolute -top-6 -right-2 text-[10rem] leading-none text-primary opacity-10 font-serif"
            >
                &rdquo;
            </span>

            <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-0.5 text-primary text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>

                {/* Quote with gold left accent */}
                <div className="border-l-2 border-primary/60 pl-4">
                    <p className="text-base leading-relaxed text-white/90 italic">
                        &ldquo;Every other lender told my client no. Begory
                        Capital understood the deal, found a path, and closed
                        the loan on time. They didn&apos;t overcomplicate it —
                        they just executed.&rdquo;
                    </p>
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        R
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">
                            Realtor Name Here
                        </div>
                        <div className="text-xs text-gray-400">
                            NY &amp; NJ Real Estate Agent
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 border-t border-white/10">
                {pills.map((pill) => (
                    <span
                        key={pill}
                        className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-gray-300"
                    >
                        {pill}
                    </span>
                ))}
            </div>
        </Card>
    );
}

export default function WhyBegory() {
    return (
        <section id="why" className="scroll-mt-20">
            <SplitLayout left={<Left />} right={<Right />} ratio="55-45" />
        </section>
    );
}
