import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
    return (
        <h1 className="text-5xl font-semibold tracking-tight">
            {children}
        </h1>
    );
}

export function H2({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            {children}
        </h2>
    );
}