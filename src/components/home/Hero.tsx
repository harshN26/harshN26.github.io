"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
    const [firstName, ...rest] = site.name.split(" ");
    const lastName = rest.join(" ");

    return (
        <section className="relative flex min-h-[85vh] items-center py-16">
            <div className="mx-auto w-full max-w-4xl space-y-8 text-center">
                <motion.p
                    className="text-sm font-medium uppercase tracking-widest text-blue-400"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    {site.title}
                </motion.p>

                <motion.h1
                    className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {firstName}{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {lastName}
                    </span>
                </motion.h1>

                <motion.p
                    className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {site.tagline} {site.description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4 pt-2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Button href="/projects">View Projects</Button>
                    <Button href={socials.resume} variant="secondary">
                        Resume
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
