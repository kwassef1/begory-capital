import Link from "next/link";
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";

const tools = [
    {
        badge: "FIX & FLIP",
        title: "Flip profit & ROI calculator",
        description:
            "Enter purchase price, rehab budget, ARV, and holding costs. Get total project cost, estimated profit, ROI, and cost-as-%-of-ARV in seconds.",
        bullets: ["Purchase + rehab + carrying costs", "ARV-based profit estimate", "ROI & cost-to-ARV ratio"],
        href: "/tools#flip-calculator",
    },
    {
        badge: "DSCR RENTAL",
        title: "Rental cash flow calculator",
        description:
            "Model monthly cash flow, cap rate, and cash-on-cash return for any buy-and-hold property. Built around DSCR underwriting standards.",
        bullets: ["Monthly P&I, cash flow & NOI", "Cap rate & cash-on-cash return", "Vacancy & expense modeling"],
        href: "/tools#rental-calculator",
    },
];

export default function CalculatorTeaser() {
    return (
        <section id="calculators" className="scroll-mt-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <Badge>INVESTOR TOOLS</Badge>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                        Run the numbers before you call us.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Free calculators for fix-and-flip and DSCR rental analysis — built
                        for the way NY &amp; NJ investors actually underwrite deals.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {tools.map(({ badge, title, description, bullets, href }) => (
                        <Card key={badge} className="p-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                    {badge}
                                </span>
                                <h3 className="text-lg font-semibold text-foreground leading-snug">
                                    {title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>

                            <ul className="flex flex-col gap-1.5">
                                {bullets.map((b) => (
                                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" asChild className="mt-auto w-full sm:w-auto">
                                <Link href={href}>Open calculator →</Link>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
