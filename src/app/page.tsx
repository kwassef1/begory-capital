import Header from "@/components/header";
import Hero from "@/components/hero";
import RentalForm from "@/components/rentalform";
import DSCRSample from "@/components/dscr-sample";
import SplitLayout from "@/components/split";
import Card from "@/components/card";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
        </div>
    );
}
