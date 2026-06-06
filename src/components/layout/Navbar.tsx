"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/research", label: "Research" },
    { href: "/credentials", label: "Credentials" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/50 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight transition-colors hover:text-blue-400"
                >
                    {site.shortName}
                </Link>

                <div className="flex gap-1 sm:gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "rounded-lg px-3 py-1.5 text-sm transition-colors",
                                pathname === link.href || pathname === `${link.href}/`
                                    ? "bg-zinc-800/80 text-white"
                                    : "text-zinc-400 hover:text-white"
                            )}
                        >
                            <span className="hidden sm:inline">{link.label}</span>
                            <span className="sm:hidden">{link.label.slice(0, 4)}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
