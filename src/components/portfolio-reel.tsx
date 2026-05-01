"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Card from "@/components/card";

const slides = [
    {
        src: "/portfolio-reel-1.svg",
        alt: "Distressed multifamily project snapshot",
        title: "Newark multifamily rehab",
        meta: "Fix & Flip · Closed in 9 days",
    },
    {
        src: "/portfolio-reel-2.svg",
        alt: "Mixed-use building snapshot",
        title: "Jersey City mixed-use bridge",
        meta: "Bridge Loan · Lease-up transition",
    },
    {
        src: "/portfolio-reel-3.svg",
        alt: "Rental property snapshot",
        title: "Queens DSCR rental",
        meta: "30-year fixed · Cash-out refinance",
    },
    {
        src: "/portfolio-reel-4.svg",
        alt: "Small commercial property snapshot",
        title: "Bronx value-add conversion",
        meta: "Bridge Loan · Complex title solved",
    },
];

export default function PortfolioReel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const reelRef = useRef<HTMLDivElement | null>(null);

    const visibleSlides = [
        slides[activeSlide],
        slides[(activeSlide + 1) % slides.length],
    ];

    useEffect(() => {
        if (isPaused) {
            return undefined;
        }

        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 7000);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        function handlePointerDown(event: PointerEvent) {
            if (!isPaused) {
                return;
            }

            const target = event.target;

            if (
                reelRef.current &&
                target instanceof Node &&
                !reelRef.current.contains(target)
            ) {
                setIsPaused(false);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () =>
            document.removeEventListener("pointerdown", handlePointerDown);
    }, [isPaused]);

    function handleSlideChange(nextIndex: number) {
        setIsPaused(true);
        setActiveSlide(nextIndex);
    }

    function handleStep(delta: number) {
        setIsPaused(true);
        setActiveSlide(
            (current) => (current + delta + slides.length) % slides.length,
        );
    }

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-5 max-w-2xl">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Project snapshots
                    </div>
                    <h2 className="mt-1 text-2xl font-semibold text-foreground">
                        A quick look at the kinds of properties we finance.
                    </h2>
                </div>
            </div>

            <div
                ref={reelRef}
                className="relative mx-auto w-full max-w-none overflow-hidden rounded-none border-y border-border bg-card/80 py-6 sm:rounded-none"
            >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-card to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-card to-transparent" />

                <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2">
                            {visibleSlides.map((slide, index) => (
                                <Card
                                    key={`${slide.title}-${activeSlide}-${index}`}
                                    className="overflow-hidden"
                                    variant="default"
                                >
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            sizes="(max-width: 767px) 100vw, 50vw"
                                            className="object-cover transition-opacity duration-1000 ease-in-out"
                                            priority={index === 0}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 p-4 sm:p-5">
                                        <div className="text-sm font-semibold text-foreground">
                                            {slide.title}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {slide.meta}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition hover:bg-background sm:left-4"
                            aria-label="Previous slide"
                            onClick={() => handleStep(-1)}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition hover:bg-background sm:right-4"
                            aria-label="Next slide"
                            onClick={() => handleStep(1)}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.title}
                                type="button"
                                className={`h-2.5 rounded-full transition-all ${
                                    index === activeSlide
                                        ? "w-8 bg-primary"
                                        : "w-2.5 bg-border"
                                }`}
                                aria-label={`Show ${slide.title}`}
                                onClick={() => handleSlideChange(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
