import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import ParticleField from "@/components/effects/ParticleField";

export const metadata: Metadata = {
    title: "Harsh Nihalani",
    description:
        "Electrical & Computer Engineering Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-background text-foreground overflow-x-hidden">
                {/* Background Effects */}
                <AnimatedBackground />
                <ParticleField />

                {/* Main Site */}
                <div className="relative z-10 min-h-screen flex flex-col">
                    <Navbar />

                    <main className="flex-1">
                        {children}
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}