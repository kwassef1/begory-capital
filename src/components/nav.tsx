interface NavButtonProps {
    label: string;
}

export default function NavButton({ label }: NavButtonProps) {
    return (
        <button
            type="button"
            className="group relative flex items-center px-6 py-3.5 text-lg font-bold text-gray-800 transition duration-150 hover:text-primary"
        >
            {label}

            {/* Upward glow from bottom */}
            <span className="overflow-hidden absolute inset-0 origin-bottom opacity-0 scale-0 transition duration-150 group-hover:opacity-100 group-hover:scale-100">
                <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-primary/20 to-transparent blur rounded-t-full" />
            </span>
        </button>
    );
}
