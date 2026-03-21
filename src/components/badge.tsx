type BadgeProps = {
    children: React.ReactNode;
    showDot?: boolean;
};

export default function Badge({ children, showDot = true }: BadgeProps) {
    return (
        <div className="bg-primary/10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-foreground text-sm font-medium">
            {showDot && (
                <span className="w-2 h-2 rounded-full bg-primary"></span>
            )}
            {children}
        </div>
    );
}
