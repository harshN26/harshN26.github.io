"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/40 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

                <Link
                    href="/"
                    className="text-lg font-bold tracking-wide"
                >
                    HN
                </Link>

                <div className="flex gap-8 text-sm text-zinc-300">
                    <Link href="/projects">
                        Projects
                    </Link>

                    <Link href="/experience">
                        Experience
                    </Link>

                    <Link href="/research">
                        Research
                    </Link>

                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}