import { Button } from "@/components/ui/button";

export default function CTAStrip() {
    return (
        <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-foreground px-8 py-10 grid md:grid-cols-[2.1fr_1fr] gap-6 md:items-center shadow-lg">
                <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                        Ready to talk about your next deal?
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-400">
                        Share a few details about the property and your timeline. We&apos;ll respond with structure ideas, estimated terms, and next steps.
                    </p>
                </div>
                <div>
                    <Button variant="primary" size="lg" asChild>
                        <a href="#contact">Start a conversation</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
