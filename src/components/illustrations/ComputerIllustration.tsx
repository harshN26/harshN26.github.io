export default function ComputerIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <rect x="30" y="20" width="140" height="90" rx="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 95 L170 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="70" y="100" width="60" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M85 108 L115 125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M60 108 L60 125 L140 125 L140 108" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="55" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
            <path d="M88 55 L112 55 M100 43 L100 67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M45 40 L55 50 M155 40 L145 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </svg>
    );
}
