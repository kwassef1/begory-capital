import React from "react";
type CardProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    tag?: string;
};
export default function Card({
    children,
    className = "",
    title,
    tag,
}: CardProps) {
    return (
        <div className="w-full flex justify-center">
            <div
                className={`max-w-lg w-full flex-none bg-gradient-to-br from-primary/35 via-primary/10 via-[10%] to-white rounded-2xl border border-gray-200 shadow-md p-6 ${className}`}
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
