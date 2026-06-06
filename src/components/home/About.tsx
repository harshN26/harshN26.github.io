import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section className="py-16 md:py-24">
            <FadeIn>
                <SectionHeading subtitle="Who I am">About Me</SectionHeading>
            </FadeIn>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto]">
                <FadeIn delay={0.1}>
                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        {site.about.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <Card className="space-y-4 md:min-w-[220px]" hover={false}>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <GraduationCap size={18} className="text-blue-400" />
                            {site.university}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <MapPin size={18} className="text-blue-400" />
                            {site.location}
                        </div>
                    </Card>
                </FadeIn>
            </div>
        </section>
    );
}
