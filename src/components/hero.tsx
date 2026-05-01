import Link from "next/link";
import SplitLayout from "@/components/split";
import Metric from "@/components/metrics";
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import SmoothScrollLink from "@/components/smooth-scroll-link";

export default function Hero() {
    return (
        <SplitLayout
            ratio="60-40"
            align="start"
            left={
                <div className="flex-1 w-full max-w-lg mx-auto">
                    <Badge>Fast funding for real estate investors</Badge>

                    <h1 className="mt-4 font-serif font-bold text-4xl lg:text-5xl leading-tight text-foreground tracking-tight">
                        We fund the deals that{" "}
                        <span className="inline-block bg-gradient-to-br from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                            build your portfolio.
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-lg">
                        Begory Capital provides simple, asset-based lending for
                        investors in NY, NJ, PA, and FL. Fix &amp; flip, rental,
                        and bridge loans designed around real-world deals—not
                        red tape.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-7 items-center">
                        <Button variant="primary" size="begory" asChild>
                            <SmoothScrollLink href="/tools">
                                Get pre-approved
                            </SmoothScrollLink>
                        </Button>
                        <Button variant="outline" size="begory" asChild>
                            <SmoothScrollLink href="#loan-programs">
                                View loan programs
                            </SmoothScrollLink>
                        </Button>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                        <strong className="text-foreground">
                            Close in as little as 7–10 days.
                        </strong>{" "}
                        No tax returns on many programs—just the property, the
                        plan, and your experience.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <Metric
                            label="Deal types"
                            value="Fix & Flip · DSCR"
                            subtitle="Short-term rehab and buy-and-hold"
                        />
                        <Metric
                            label="Property types"
                            value="Residential + mixed-use"
                            subtitle="Single-family, 1–4 units, and multifamily up to 8 units"
                        />
                    </div>
                </div>
            }
            right={
                <div className="w-full flex flex-col gap-4">
                    <Badge>Run the numbers</Badge>
                    {(
                        [
                            {
                                badge: "FIX & FLIP",
                                title: "Flip profit & ROI calculator",
                                description:
                                    "Estimate your total project cost, profit margin, and return on investment before you make an offer.",
                                outputs: [
                                    "Total project cost",
                                    "Net profit",
                                    "ROI %",
                                    "Cost as % of ARV",
                                ],
                                href: "/tools#flip-calculator",
                            },
                            {
                                badge: "DSCR RENTAL",
                                title: "Rental cash flow calculator",
                                description:
                                    "Model monthly cash flow, cap rate, and cash-on-cash return for any buy-and-hold or refinance scenario.",
                                outputs: [
                                    "Monthly cash flow",
                                    "Cap rate",
                                    "Cash-on-cash return",
                                ],
                                href: "/tools#rental-calculator",
                            },
                        ] as const
                    ).map(({ badge, title, description, outputs, href }) => (
                        <Link
                            key={badge}
                            href={href}
                            className="group rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                    {badge}
                                </span>
                                <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </div>
                            <div className="text-sm font-semibold text-foreground leading-snug">
                                {title}
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {outputs.map((o) => (
                                    <span
                                        key={o}
                                        className="px-2 py-0.5 rounded-full bg-foreground/5 text-xs text-muted-foreground border border-border"
                                    >
                                        {o}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            }
        />
    );
}
