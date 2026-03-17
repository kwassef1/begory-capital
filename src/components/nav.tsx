interface NavButtonProps {
    label: string;
}

export default function NavButton({ label }: NavButtonProps) {
    return (
        <button className="relative inline-flex items-center justify-center h-15 rounded-none w-36 font-bold text-lg text-current transition duration-200 overflow-hidden z-10 hover:text-primary-foreground/80 transition-colors duration-200 before:content-[''] before:absolute before:left-1/6 before:right-1/6 before:top-2/5 before:bottom-0 before:rounded-md before:bg-gradient-to-r before:from-primary/0 before:via-primary/30 before:to-primary/0 before:opacity-0 hover:before:opacity-100 before:duration-200 focus-visible:before:transition-opacity before:pointer-events-none before:z-0 before:blur before:rounded-t-full">
            {label}
        </button>
    );
}
