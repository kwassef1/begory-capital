import Header from "@/components/header";
import Hero from "@/components/hero";
import Trusted from "@/components/trusted";
import HowItWorks from "@/components/how-it-works";
import LoanPrograms from "@/components/loan-programs";
import WhyBegory from "@/components/why-begory";
import FAQ from "@/components/faq";
import CTAStrip from "@/components/cta-strip";
import FixFlipCalculator from "@/components/fix-flip-calculator";
import RentalCalculator from "@/components/rental-calculator";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
                <FAQ />
                <CTAStrip />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
