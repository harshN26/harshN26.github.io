import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Badge({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm",
                className
            )}
        >
            {children}
        </span>
    );
}
