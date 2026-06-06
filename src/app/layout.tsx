import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import GlowOrb from "@/components/effects/GlowOrb";
import ParticleField from "@/components/effects/ParticleField";
import FloatingIllustrations from "@/components/illustrations/FloatingIllustrations";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
    title: {
        default: site.name,
        template: `%s | ${site.name}`,
    },
    description: `${site.tagline} ${site.description}`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black text-white antialiased">
                <AnimatedBackground />
                <GlowOrb />
                <ParticleField />
                <FloatingIllustrations />

                <div className="relative z-10 flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">
                        <Container>{children}</Container>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
