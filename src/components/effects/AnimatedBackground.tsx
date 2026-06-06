"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let angle = 0;

        const animate = () => {
            angle += 0.3;

            el.style.background = `
        radial-gradient(circle at ${50 + Math.sin(angle * 0.01) * 20}% ${50 + Math.cos(angle * 0.01) * 20}%,
        rgba(99,102,241,0.25),
        transparent 60%),
        radial-gradient(circle at ${50 + Math.cos(angle * 0.015) * 20}% ${50 + Math.sin(angle * 0.015) * 20}%,
        rgba(236,72,153,0.2),
        transparent 60%)
      `;

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div
            ref={ref}
            className="fixed inset-0 -z-20 pointer-events-none"
        />
    );
}