import { socials } from "@/data/socials";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const metadata = {
    title: "Contact",
};

const links = [
    { label: "Email", value: socials.emailDisplay, href: socials.email, icon: Mail },
    { label: "GitHub", value: socials.github.replace("https://", ""), href: socials.github, icon: Github },
    { label: "LinkedIn", value: socials.linkedin.replace("https://", ""), href: socials.linkedin, icon: Linkedin },
];

export default function ContactPage() {
    return (
        <div className="py-12 md:py-16">
            <PageHeader
                title="Contact"
                subtitle="Open to collaborations, internships, and technical discussions."
            />

            <div className="grid gap-6 md:grid-cols-2">
                {links.map((link, i) => {
                    const Icon = link.icon;
                    return (
                        <FadeIn key={link.label} delay={i * 0.08}>
                            <a href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer">
                                <Card className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500">{link.label}</p>
                                        <p className="font-medium text-zinc-200">{link.value}</p>
                                    </div>
                                </Card>
                            </a>
                        </FadeIn>
                    );
                })}
            </div>

            <FadeIn delay={0.3} className="mt-8">
                <Button href={socials.resume} variant="secondary">
                    <FileText size={16} /> Download Resume
                </Button>
            </FadeIn>
        </div>
    );
}
