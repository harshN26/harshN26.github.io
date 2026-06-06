export default function CircuitIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 180 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <path d="M20 60 H50 L60 40 H90 L100 80 H130 L140 60 H160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="60" r="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="90" cy="40" r="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="130" cy="80" r="5" stroke="currentColor" strokeWidth="2" />
            <rect x="70" y="90" width="40" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M90 80 V90" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
