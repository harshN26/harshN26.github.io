import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800/60 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
                <p className="text-sm text-zinc-500">
                    © {year} {site.name}
                </p>

                <div className="flex items-center gap-5">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-white"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href={socials.email}
                        className="text-zinc-500 transition-colors hover:text-white"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
