export default function ChipIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <rect x="40" y="40" width="80" height="80" rx="6" stroke="currentColor" strokeWidth="2.5" />
            <rect x="55" y="55" width="50" height="50" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
            {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                    <line x1={52 + i * 16} y1="40" x2={52 + i * 16} y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1={52 + i * 16} y1="120" x2={52 + i * 16} y2="132" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="40" y1={52 + i * 16} x2="28" y2={52 + i * 16} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="120" y1={52 + i * 16} x2="132" y2={52 + i * 16} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
            ))}
            <text x="80" y="88" textAnchor="middle" fill="currentColor" fontSize="14" fontFamily="monospace" opacity="0.5">
                CPU
            </text>
        </svg>
    );
}
