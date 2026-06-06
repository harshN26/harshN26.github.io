export default function RocketIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 120 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <path
                d="M60 15 C60 15 45 50 45 90 L45 120 L75 120 L75 90 C75 50 60 15 60 15Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
            <circle cx="60" cy="70" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M45 100 L25 130 L45 120" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M75 100 L95 130 L75 120" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M52 120 L48 155 M68 120 L72 155" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M48 155 Q60 170 72 155" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 175 L60 195 L65 175" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M50 185 L60 200 L70 185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        </svg>
    );
}
