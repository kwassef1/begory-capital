import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/nav";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky w-full bg-sidebar/90 backdrop-blur-md border-b top-0 z-30">
            {/* Hidden checkbox drives the mobile menu via CSS peer */}
            <input
                type="checkbox"
                id="nav-toggle"
                className="peer/nav sr-only"
            />

            <div className="flex h-16 items-center w-full max-w-7xl mx-auto px-4">
                {/* Spacer on mobile to balance the hamburger (keeps logo centered) */}
                <div className="lg:hidden w-9" />

                {/* Logo — centered on mobile, left-aligned on desktop */}
                <div className="flex flex-1 lg:flex-none justify-center lg:justify-start">
                    <Link title="Home" aria-label="Home Page" href="/">
                        <Image
                            src="/icon.svg"
                            height={40}
                            width={160}
                            alt="Begory Capital"
                        />
                    </Link>
                </div>

                {/* Desktop nav — center */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <NavButton label="Into Begory" href="/#why" />
                    <NavButton label="Our Team" href="/#contact" />
                    <NavButton label="Our Services" href="/invest" />
                    <NavButton label="Our Portfolio" href="/#loan-programs" />
                </div>

                {/* Contact Us — desktop only */}
                <div className="hidden lg:block">
                    <Button variant="primary" size="sm" asChild>
                        <a href="/#contact">Contact Us</a>
                    </Button>
                </div>

                {/* Hamburger — mobile only, right side */}
                <label
                    htmlFor="nav-toggle"
                    className="lg:hidden cursor-pointer flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition"
                    aria-label="Toggle menu"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <rect y="3" width="20" height="2" rx="1" fill="#374151" />
                        <rect y="9" width="20" height="2" rx="1" fill="#374151" />
                        <rect y="15" width="20" height="2" rx="1" fill="#374151" />
                    </svg>
                </label>
            </div>

            {/* Mobile menu — shown when checkbox is checked */}
            <div className="lg:hidden hidden peer-checked/nav:block border-t bg-sidebar/95 backdrop-blur-md">
                <nav className="flex flex-col px-4 py-2 max-w-7xl mx-auto">
                    <NavButton label="Into Begory" href="/#why" />
                    <NavButton label="Our Team" href="/#contact" />
                    <NavButton label="Our Services" href="/invest" />
                    <NavButton label="Our Portfolio" href="/#loan-programs" />
                </nav>
                <div className="px-4 pb-4">
                    <Button variant="primary" className="w-full" asChild>
                        <a href="/#contact">Contact Us</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
