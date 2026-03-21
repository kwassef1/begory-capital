import Header from "@/components/header";
import Hero from "@/components/hero";
import Trusted from "@/components/trusted";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Trusted />
            </main>
            <Footer />
        </div>
    );
}
