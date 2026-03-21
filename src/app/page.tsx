import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Trusted from "@/components/trusted";
import HowItWorks from "@/components/how-it-works";
import LoanPrograms from "@/components/loan-programs";
import WhyBegory from "@/components/why-begory";
import CTAStrip from "@/components/cta-strip";
import FixFlipCalculator from "@/components/fix-flip-calculator";
import RentalCalculator from "@/components/rental-calculator";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Private Real Estate Loans in NY & NJ — Fix-Flip, DSCR, Bridge",
    description:
        "Begory Capital funds fix-and-flip, DSCR rental, and bridge loans for real estate investors in New York and New Jersey. Fast approvals, competitive rates.",
    openGraph: {
        title: "Begory Capital | Private Real Estate Lending — NY & NJ",
        description:
            "Fast, flexible private loans for real estate investors. Fix-and-flip, DSCR, and bridge financing in New York and New Jersey.",
        url: "https://begorycapital.com",
        type: "website",
    },
    twitter: {
        title: "Begory Capital | Private Real Estate Lending — NY & NJ",
        description:
            "Fast, flexible private loans for real estate investors. Fix-and-flip, DSCR, and bridge financing in New York and New Jersey.",
    },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Trusted />
                <HowItWorks />
                <LoanPrograms />
                <WhyBegory />
                <FixFlipCalculator />
                <RentalCalculator />
                <CTAStrip />
            </main>
            <Footer />
        </div>
    );
}
