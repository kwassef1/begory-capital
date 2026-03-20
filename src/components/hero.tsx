import Card from "@/components/card";
import RentalForm from "@/components/rentalform";
import SplitLayout from "@/components/split";
import Metric from "@/components/metrics";
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <SplitLayout
            left={
                <div className="flex-1 min-w-sm max-w-lg">
                    <Badge>Fast funding for real estate investors</Badge>

                    <h1 className="mt-4 font-serif font-bold text-4xl lg:text-5xl leading-tight text-navy tracking-tight">
                        We fund the deals that{" "}
                        <span className="inline-block bg-gradient-to-br from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                            build your portfolio.
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-lg">
                        Begory Capital provides simple, asset-based lending for
                        investors in NY, NJ and beyond. Fix &amp; flip, rental,
                        and bridge loans designed around real-world deals—not
                        red tape.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-7 items-center radius-4xl rounded-full">
                        <Button variant="primary" size="begory" type="submit">
                            Get pre-approved
                        </Button>
                        <Button variant="outline" size="begory">
                            View loan programs
                        </Button>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                        <strong className="text-navy-soft">
                            Close in as little as 7–10 days.
                        </strong>{" "}
                        No tax returns on many programs—just the property, the
                        plan, and your experience.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <Metric
                            label="Experience"
                            value="10+ yrs"
                            subtitle="Real estate & lending"
                        />
                        <Metric
                            label="Loan sizes"
                            value="$150k–$5M"
                            subtitle="Investor-focused"
                        />
                        <Metric
                            label="Property types"
                            value="1–20 units"
                            subtitle="SFR, 2–4, mixed-use"
                        />
                    </div>
                </div>
            }
            right={
                <Card>
                    <RentalForm />
                </Card>
            }
        />
    );
}
