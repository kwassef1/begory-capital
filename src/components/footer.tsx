import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Into Begory", href: "/about" },
    { label: "Deal Tools", href: "/tools" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "X / Twitter",
        href: "#",
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-sidebar border-t mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                    {/* Brand + contact */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icon.svg"
                                width={32}
                                height={32}
                                alt="Begory Icon"
                            />
                            <div>
                                <div className="text-base font-bold text-foreground">
                                    Begory Capital
                                </div>
                                <div className="text-xs text-muted-foreground tracking-wide">
                                    PRIVATE LENDING • REAL ESTATE
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Fast, flexible private lending solutions for real
                            estate investors — from acquisition to
                            stabilization.
                        </p>
                        <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="mailto:info@begorycapital.com"
                                    className="hover:text-primary transition"
                                >
                                    info@begorycapital.com
                                </a>
                            </li>
                            <li>151 W Passaic St, Rochelle Park, NJ</li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-semibold text-foreground uppercase tracking-widest">
                            Navigate
                        </div>
                        <ul className="flex flex-col gap-2">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-muted-foreground hover:text-primary transition"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social 
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-semibold text-foreground uppercase tracking-widest">
                            Follow Us
                        </div>
                        <ul className="flex flex-col gap-2.5">
                            {socialLinks.map(({ label, href, icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {icon}
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>*/}
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Legal + copyright */}
                <div className="pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {year} Begory Capital LLC. All rights reserved.</p>
                    <p className="sm:text-right max-w-md">
                        Loans made or arranged pursuant to applicable state law.
                        This is not an offer to lend. All loans subject to
                        borrower and property qualification. Rates and terms
                        subject to change without notice.
                    </p>
                </div>
            </div>
        </footer>
    );
}
