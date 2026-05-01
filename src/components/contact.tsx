import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-20">
            <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Info panel */}
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                        <div>
                            <h2 className="text-lg font-semibold text-foreground">Connect with Begory Capital.</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Use this form to send a quick summary of your deal. A member of our team will follow up with questions and options.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 text-sm">
                            <div><span className="font-medium text-foreground">Email:</span> <a href="mailto:info@begorycapital.com" className="text-muted-foreground hover:text-primary transition">info@begorycapital.com</a></div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <div className="font-medium text-foreground">Office</div>
                            <div>151 W Passaic St, 2nd Floor</div>
                            <div>Rochelle Park, NJ 07662</div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-auto">
                            This form does not create a loan application or approval. All loans are subject to underwriting and property review.
                        </p>
                    </div>

                    {/* Contact form */}
                    <form className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-name">Full name</label>
                                <Input id="c-name" type="text" placeholder="Your name" autoComplete="name" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-email">Email</label>
                                <Input id="c-email" type="email" placeholder="you@example.com" autoComplete="email" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-phone">Phone</label>
                                <Input id="c-phone" type="tel" placeholder="Best number to reach you" autoComplete="tel" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-property-type">Property type</label>
                                <select
                                    id="c-property-type"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option>Single-family residence</option>
                                    <option>2–4 unit</option>
                                    <option>Multifamily (5+ units)</option>
                                    <option>Mixed-use</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-purpose">Loan purpose</label>
                                <select
                                    id="c-purpose"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option>Purchase</option>
                                    <option>Refinance</option>
                                    <option>Cash-out refinance</option>
                                    <option>Fix &amp; flip</option>
                                    <option>Bridge</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-muted-foreground" htmlFor="c-timeline">Desired closing timeline</label>
                                <select
                                    id="c-timeline"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option>7–10 days</option>
                                    <option>2–3 weeks</option>
                                    <option>30+ days</option>
                                    <option>Just exploring options</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-muted-foreground" htmlFor="c-details">Tell us about the deal</label>
                            <textarea
                                id="c-details"
                                rows={4}
                                placeholder="Address, purchase price, rehab budget, estimated value, and anything else we should know."
                                className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                            />
                        </div>

                        <Button variant="primary" type="submit" className="w-full">
                            Submit deal summary
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            By submitting, you agree to be contacted by Begory Capital about potential loan options.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
