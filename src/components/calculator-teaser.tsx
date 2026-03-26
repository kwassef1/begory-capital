import Link from "next/link";
import Badge from "@/components/badge";

const tools = [
    {
        badge: "FIX & FLIP",
        title: "Flip profit & ROI calculator",
        description: "Estimate total project cost, profit, ROI, and cost-as-%-of-ARV from purchase price, rehab budget, and holding costs.",
        href: "/tools#flip-calculator",
    },
    {
        badge: "DSCR RENTAL",
        title: "Rental cash flow calculator",
        description: "Model monthly cash flow, cap rate, and cash-on-cash return for any buy-and-hold property.",
        href: "/tools#rental-calculator",
    },
];

export default function CalculatorTeaser() {
    return (
        <section id="calculators" className="scroll-mt-20 max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge>INVESTOR TOOLS</Badge>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                        Run the numbers before you call us.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {tools.map(({ badge, title, description, href }) => (
                        <Link
                            key={badge}
                            href={href}
                            className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                    {badge}
                                </span>
                                <span className="text-primary text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </div>
                            <div className="text-base font-semibold text-foreground leading-snug">
                                {title}
                            </div>
                            <p className="text-sm text-muted-foreground">{description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
