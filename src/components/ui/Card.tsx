import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
    children: ReactNode;
    className?: string;
    hover?: boolean;
};

export default function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm",
                hover && "transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-500/10",
                className
            )}
        >
            {children}
        </div>
    );
}
