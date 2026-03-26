"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SmoothScrollLink from "@/components/smooth-scroll-link";

interface NavButtonProps {
    label: string;
    href?: string;
}

export default function NavButton({ label, href }: NavButtonProps) {
    const pathname = usePathname();
    const isActive = !!href && !href.includes("#") && pathname === href;

    const className =
        "group relative flex items-center px-6 py-3.5 text-lg font-bold transition duration-150 text-gray-800 hover:text-primary";

    const glow = (
        <span className="absolute inset-0 origin-bottom opacity-0 scale-0 transition duration-150 group-hover:opacity-100 group-hover:scale-100">
            <span className="absolute inset-x-4 -bottom-1 h-full bg-gradient-to-t from-primary/20 to-transparent blur rounded-t-full" />
        </span>
    );

    const activeIndicator = isActive && (
        <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-primary rounded-full" />
    );

    if (href?.includes("#")) {
        return (
            <SmoothScrollLink href={href} className={className}>
                {label}
                {glow}
                {activeIndicator}
            </SmoothScrollLink>
        );
    }

    if (href) {
        return (
            <Link href={href} className={className}>
                {label}
                {glow}
                {activeIndicator}
            </Link>
        );
    }

    return (
        <button type="button" className={className}>
            {label}
            {glow}
        </button>
    );
}
