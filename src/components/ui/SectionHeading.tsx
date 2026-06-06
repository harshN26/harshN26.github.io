import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    children: ReactNode;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
};

export default function SectionHeading({
    children,
    subtitle,
    className,
    align = "left",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "space-y-2",
                align === "center" && "text-center",
                className
            )}
        >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
                {children}
            </h2>
            {subtitle && (
                <p className="text-zinc-400 text-base md:text-lg">{subtitle}</p>
            )}
        </div>
    );
}
