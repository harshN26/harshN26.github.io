import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    external?: boolean;
};

const variants = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20",
    secondary:
        "border border-zinc-700 text-zinc-200 hover:border-blue-500 hover:text-blue-400",
    ghost: "text-zinc-300 hover:text-white",
};

export default function Button({
    children,
    href,
    variant = "primary",
    className,
    external,
}: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200",
        variants[variant],
        className
    );

    if (!href) {
        return <button className={classes}>{children}</button>;
    }

    if (external) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
