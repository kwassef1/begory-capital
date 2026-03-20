type SplitLayoutProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    reverse?: boolean;
    className?: string;
    ratio?: "50-50" | "66-33" | "33-66";
};

const ratioClasses: Record<NonNullable<SplitLayoutProps["ratio"]>, string> = {
    "50-50": "lg:grid-cols-2",
    "66-33": "lg:grid-cols-[2fr_1fr]",
    "33-66": "lg:grid-cols-[1fr_2fr]",
};

export default function SplitLayout({
    left,
    right,
    reverse = false,
    className = "",
    ratio = "50-50",
}: SplitLayoutProps) {
    return (
        <div
            className={`max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8 grid gap-7 ${ratioClasses[ratio]} lg:items-center ${className}`}
        >
            <div className={reverse ? "lg:order-2" : ""}>{left}</div>
            <div className={reverse ? "lg:order-1" : ""}>{right}</div>
        </div>
    );
}
