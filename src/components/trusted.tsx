const pills = [
    "Fix & flip investors",
    "Buy & hold landlords",
    "Small developers",
    "Agents & loan officers",
];

export default function Trusted() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white/90 px-5 py-3.5">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Trusted by investors, agents &amp; real estate professionals
                </span>
                <div className="flex flex-wrap gap-2">
                    {pills.map((pill) => (
                        <span
                            key={pill}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-foreground"
                        >
                            {pill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
