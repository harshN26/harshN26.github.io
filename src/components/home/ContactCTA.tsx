import { socials } from "@/data/socials";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="py-20 md:py-32">
            <FadeIn>
                <div className="rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 px-8 py-16 text-center backdrop-blur-sm">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Let&apos;s Connect
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                        Interested in engineering, startups, hardware, software, or
                        collaboration opportunities.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button href="/contact">Contact Me</Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-6">
                        <a
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 transition-colors hover:text-white"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 transition-colors hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href={socials.email}
                            className="text-zinc-400 transition-colors hover:text-white"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
