export default function DSCRSample() {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-5">
                <div>
                    <div className="text-sm font-semibold text-foreground">
                        Sample DSCR rental deal
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                        2–4 unit · Jersey City, NJ
                    </div>
                </div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full border border-gray-300 text-xs text-gray-500">
                    Investor loan
                </span>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-foreground text-gray-50 border border-foreground">
                    Rental (DSCR)
                </span>
                <span className="px-3 py-1 rounded-full text-xs border border-gray-200 text-foreground bg-white/80">
                    Fix &amp; flip
                </span>
                <span className="px-3 py-1 rounded-full text-xs border border-gray-200 text-foreground bg-white/80">
                    Bridge
                </span>
            </div>

            {/* Loan boxes */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                    { label: "Purchase price", value: "$850,000" },
                    { label: "Loan amount", value: "$680,000" },
                    { label: "Rate (starting)", value: "7.25%*" },
                    { label: "Term", value: "30-year fixed" },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        className="bg-white/85 rounded-xl border border-gray-200 px-3 py-2.5"
                    >
                        <div className="text-[0.7rem] text-gray-500 mb-0.5">
                            {label}
                        </div>
                        <div className="text-[0.95rem] font-semibold text-foreground">
                            {value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Timeline */}
            <div className="border-t border-dashed border-gray-300 pt-3 flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500">
                <span>⏱ Fast pre-approval</span>
                <span className="px-2.5 py-1 rounded-full bg-foreground/6 text-foreground font-medium">
                    Closing target: 10–14 days
                </span>
            </div>

            <p className="mt-3 text-[0.72rem] text-gray-400">
                *Illustration only. Rates and terms are subject to market,
                borrower profile, and property.
            </p>
        </div>
    );
}
