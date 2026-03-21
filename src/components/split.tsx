type SplitLayoutProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    reverse?: boolean;
    className?: string;
    ratio?: "50-50" | "55-45" | "60-40" | "66-33" | "33-66" | "40-60" | "45-55";
    /** Strip page-level margin/padding so SplitLayout can compose inside a Card or section. */
    bare?: boolean;
    align?: "center" | "start" | "stretch";
};

const ratioClasses: Record<NonNullable<SplitLayoutProps["ratio"]>, string> = {
    "50-50": "lg:grid-cols-2",
    "55-45": "lg:grid-cols-[11fr_9fr]",
    "60-40": "lg:grid-cols-[3fr_2fr]",
    "66-33": "lg:grid-cols-[2fr_1fr]",
    "33-66": "lg:grid-cols-[1fr_2fr]",
    "40-60": "lg:grid-cols-[2fr_3fr]",
    "45-55": "lg:grid-cols-[9fr_11fr]",
};

export default function SplitLayout({
    left,
    right,
    reverse = false,
    className = "",
    ratio = "50-50",
    bare = false,
    align = "center",
}: SplitLayoutProps) {
    const wrapper = bare ? "" : "max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8";
    const alignClass = align === "stretch" ? "lg:items-stretch" : align === "start" ? "lg:items-start" : "lg:items-center";
    return (
        <div
            className={`${wrapper} grid gap-7 ${ratioClasses[ratio]} ${alignClass} ${className}`}
        >
            <div className={reverse ? "lg:order-2" : ""}>{left}</div>
            <div className={reverse ? "lg:order-1" : ""}>{right}</div>
        </div>
    );
}
