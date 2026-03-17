import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/nav";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-16 bg-sidebar p-4 border-b top-0 z-10">
            <div className="flex h-8 items-center justify-between w-full max-w-7xl mx-auto">
                <div className="flex">
                    <Image
                        src="/icon.svg"
                        width={36}
                        height={36}
                        alt="Begory Icon"
                    />
                    <Button
                        className="text-xl font-bold px-2 mt-1"
                        variant="ghost"
                        asChild
                    >
                        <Link title="Home" aria-label="Home Page" href="/">
                            <div>
                                <h2 className="text-xl font-bolder">
                                    Begory Capital
                                </h2>
                                <h1 className="text-sm font-medium">
                                    PRIVATE LENDING • REAL ESTATE
                                </h1>
                            </div>
                        </Link>
                    </Button>
                </div>
                <div>
                    <NavButton label="Into Begory" />
                    <NavButton label="Our Team" />
                    <NavButton label="Our Services" />
                    <NavButton label="Our Portfolio" />
                </div>
                <div>
                    <Button size="sm">Contact Us</Button>
                </div>
            </div>
        </header>
    );
}
