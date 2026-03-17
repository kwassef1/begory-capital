import Card from "@/components/card";
import Header from "@/components/header";
import RentalForm from "@/components/rentalform";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Card>
                <RentalForm />
            </Card>
            {/* <div className="max-w-6xl mx-auto flex items-start justify-end py-12 px-4">
                <div className="w-full max-w-lg">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <RentalForm />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
