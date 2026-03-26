import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FixFlipCalculator from "@/components/fix-flip-calculator";
import RentalCalculator from "@/components/rental-calculator";
export const metadata: Metadata = {
    title: "Investor Calculators — Fix & Flip and DSCR Rental | Begory Capital",
    description:
        "Run the numbers on your next deal. Begory Capital's free calculators estimate flip profit, ROI, cash flow, cap rate, and cash-on-cash return for NY & NJ investors.",
};

export default function ToolsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="max-w-2xl flex flex-col gap-3">
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            Investor calculators
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Free tools for fix-and-flip profit analysis and DSCR
                            rental underwriting. Include your contact info and
                            we&apos;ll follow up on any deal worth pursuing.
                        </p>
                    </div>
                </section>
                <FixFlipCalculator />
                <RentalCalculator />
            </main>

            <Footer />
        </div>
    );
}
