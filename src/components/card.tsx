import React from "react";

type CardVariant = "default" | "dark" | "plain";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
    variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
    default: "bg-gradient-to-br from-primary/35 via-primary/10 via-[10%] to-white border border-gray-200 shadow-md",
    dark:    "bg-foreground shadow-lg text-gray-200",
    plain:   "bg-card border border-border shadow-sm",
};

export default function Card({
    children,
    className = "",
    variant = "plain",
    ...rest
}: CardProps) {
    return (
        <div
            className={`rounded-2xl ${variantClasses[variant]} ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
}
