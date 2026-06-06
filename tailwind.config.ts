import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                cyber: {
                    950: "#030712",
                    900: "#0b1329",
                    800: "#1c2541",
                    cyan: "#06b6d4",
                    purple: "#a855f7",
                    neon: "#10b981"
                }
            },
            animation: {
                "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow-slow": "glow 4s ease-in-out infinite alternate",
            },
            keyframes: {
                glow: {
                    "0%": { textShadow: "0 0 10px rgba(6, 182, 212, 0.2)" },
                    "100%": { textShadow: "0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(168, 85, 247, 0.4)" }
                }
            }
        },
    },
    plugins: [],
};
export default config;