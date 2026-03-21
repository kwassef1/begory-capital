import React from "react";

type CardVariant = "default" | "dark" | "ghost";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    tag?: string;
    variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
    default: "bg-gradient-to-br from-primary/35 via-primary/10 via-[10%] to-white border border-gray-200 shadow-md",
    dark:    "bg-foreground border-0 shadow-lg text-gray-200",
    ghost:   "bg-white/90 border border-border",
};

export default function Card({
    children,
    className = "",
    title,
    tag,
    variant = "default",
}: CardProps) {
    return (
        <div className="w-full flex justify-center">
            <div
                className={`max-w-lg w-full flex-none rounded-2xl p-6 ${variantClasses[variant]} ${className}`}
            >
                {title && <div className="card-title">{title}</div>}
                {tag && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {tag}
                    </span>
                )}
                {children}
            </div>
        </div>
    );
}
