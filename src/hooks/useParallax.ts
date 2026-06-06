import { useEffect, useState } from "react";

export function useParallax(speed = 0.1) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handler = () => {
            setOffset(window.scrollY * speed);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [speed]);

    return offset;
}