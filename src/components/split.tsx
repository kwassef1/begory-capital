type SplitLayoutProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    reverse?: boolean;
    className?: string;
};

export default function SplitLayout({
    left,
    right,
    reverse = false,
    className = "",
}: SplitLayoutProps) {
    return (
        <div
            className={`max-w-6xl mx-auto my-16 grid gap-7 lg:grid-cols-2 lg:items-center ${className}`}
        >
            {reverse ? (
                <>
                    <div className="order-2 lg:order-1">{right}</div>
                    <div className="order-1 lg:order-2">{left}</div>
                </>
            ) : (
                <>
                    <div>{left}</div>
                    <div>{right}</div>
                </>
            )}
        </div>
    );
}
