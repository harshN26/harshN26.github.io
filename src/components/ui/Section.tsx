import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
    return (
        <section className="space-y-6 py-10">
            {children}
        </section>
    );
}