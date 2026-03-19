import Card from "@/components/card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RentalForm from "@/components/rentalform";
import SplitLayout from "@/components/split";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
        </div>
    );
}
