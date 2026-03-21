import Badge from "@/components/badge";
import Card from "@/components/card";
import SplitLayout from "@/components/split";

const steps = [
    {
        number: 1,
        title: "Tell us about the deal",
        text: "Share the property, purchase price, rehab budget (if any), and your exit — flip, refinance, or hold.",
    },
    {
        number: 2,
        title: "We design a custom structure",
        text: "We look at the real numbers and build loan options around your project — not just a computer model.",
    },
    {
        number: 3,
        title: "Close fast & execute",
        text: "Our team coordinates with title, attorneys, and insurance so you can focus on renovating, leasing, and growing.",
    },
];

const pills = [
    "No tax returns on many programs",
    "Common-sense underwriting",
    "Investor-friendly terms",
];

const stats = [
    { value: "72%", label: "of loans closed with repeat borrowers." },
    { value: "48 hrs", label: "average time from docs to conditional approval." },
    { value: "7–21 days", label: "typical closing window depending on complexity." },
];

function Left() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Badge>HOW IT WORKS</Badge>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    A clear path from term sheet to closing.
                </h2>
                <p className="text-sm text-muted-foreground">
                    No endless back-and-forth. Just a focused process that respects your timeline and your contract dates.
                </p>
            </div>

            <ol className="flex flex-col gap-5">
                {steps.map(({ number, title, text }) => (
                    <li key={number} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-foreground/8 flex items-center justify-center text-xs font-semibold text-foreground shrink-0">
                            {number}
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-foreground">{title}</div>
                            <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
                        </div>
                    </li>
                ))}
            </ol>

            <div className="flex flex-wrap gap-2">
                {pills.map((pill) => (
                    <span
                        key={pill}
                        className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground"
                    >
                        {pill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Right() {
    return (
        <Card variant="dark" className="p-6">
            <div className="grid md:grid-cols-[1.15fr_1.3fr] gap-5 md:items-center">
                <div>
                    <p className="text-base font-medium text-gray-200 leading-relaxed">
                        &ldquo;Every file is treated like our own investment. We look at the property, the plan, and the person — not just a credit score.&rdquo;
                    </p>
                    <p className="mt-2.5 text-sm text-gray-400">— Begory Capital underwriting philosophy</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {stats.map(({ value, label }) => (
                        <div key={value} className="flex flex-col gap-0.5">
                            <span className="text-lg font-semibold text-primary">{value}</span>
                            <span className="text-sm text-gray-400">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <SplitLayout left={<Left />} right={<Right />} ratio="55-45" />
        </section>
    );
}
