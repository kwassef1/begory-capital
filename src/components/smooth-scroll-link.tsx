"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a">;

/**
 * Drop-in <a> replacement for hash links.
 * If the target element exists on the current page: smooth-scrolls without touching the URL.
 * If not found (e.g. navigating from /invest to /#contact): falls back to normal navigation.
 */
export default function SmoothScrollLink({ href = "", onClick, children, ...props }: Props) {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        const hash = href.includes("#") ? "#" + href.split("#")[1] : null;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
                onClick?.(e);
                return;
            }
        }
        onClick?.(e);
    }

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
