type MetricProps = {
    label: string;
    value: string;
    subtitle: string;
};

export default function Metric({ label, value, subtitle }: MetricProps) {
    return (
        <div className="min-w-[120px]">
            <div className="text-xs uppercase text-gray-500 tracking-widest mb-0.5">
                {label}
            </div>
            <div className="text-xl font-bold text-foreground">{value}</div>
            <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
    );
}
