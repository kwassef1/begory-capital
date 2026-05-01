import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Badge from "@/components/badge";
import SplitLayout from "@/components/split";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Contact Begory Capital — Borrowers & Investors",
    description:
        "Get in touch with Begory Capital. Submit a deal summary or request investor information.",
};

const faqs = [
    {
        question: "Do you work with first-time investors?",
        answer: "Yes. We work with both new and experienced investors. For first-time flips or rentals, we may ask more about your contractor, agent, and exit strategy so we can structure a safe, successful loan.",
    },
    {
        question: "What credit score and documents do you require?",
        answer: "Requirements vary by program, but many investor loans lean heavily on the property and cash flow. Some options do not require tax returns or traditional income docs. We'll match you to the best fit during your call.",
    },
    {
        question: "How fast can you close?",
        answer: "For clean files with responsive third parties, we may close in as little as 7–10 business days. More complex commercial or multi-unit deals can take longer. We set a realistic closing target upfront.",
    },
    {
        question: "Do you lend to LLCs and entities?",
        answer: "Yes. Most of our loans are made to LLCs or investment entities. We can coordinate with your attorney or CPA to ensure the structure and operating agreements are ready before closing.",
    },
    {
        question: "What markets do you lend in?",
        answer: "Our primary markets are New York and New Jersey. We also consider deals in surrounding states on a case-by-case basis. Reach out and tell us about the property — we'll let you know if we can help.",
    },
    {
        question: "Do you work with mortgage brokers and loan officers?",
        answer: "Yes — we're broker-friendly. If you're an agent or loan officer with a client who needs a private loan, submit the deal and we'll work with you directly. Referral fees paid on funded loans.",
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center text-center">
                        <Badge>CONTACT US</Badge>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-snug">
                            Whether you&apos;re borrowing or investing —
                            let&apos;s talk.
                        </h1>
                        <div className="flex flex-wrap gap-4 justify-center text-sm">
                            <a
                                href="mailto:info@begorycapital.com"
                                className="text-muted-foreground hover:text-primary transition font-medium"
                            >
                                ✉ info@begorycapital.com
                            </a>
                            <span className="text-muted-foreground">
                                📍 151 W Passaic St, Rochelle Park, NJ
                            </span>
                        </div>
                    </div>
                </section>

                {/* Form + FAQ side by side */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <SplitLayout
                        bare
                        ratio="50-50"
                        align="stretch"
                        left={<Suspense><ContactForm /></Suspense>}
                        right={
                            <div className="flex flex-col gap-6 h-full">
                                <div className="flex flex-col gap-1.5">
                                    <Badge>QUESTIONS</Badge>
                                    <h2 className="text-2xl font-semibold text-foreground leading-snug">
                                        Frequently asked questions.
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Deals are unique, but these are some of the most common questions we hear from investors and partners.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {faqs.map(({ question, answer }) => (
                                        <details
                                            key={question}
                                            className="group rounded-2xl border border-border bg-card overflow-hidden"
                                        >
                                            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none">
                                                <span className="text-sm font-medium text-foreground">{question}</span>
                                                <span className="ml-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                                                {answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        }
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}
