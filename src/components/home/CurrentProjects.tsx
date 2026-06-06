import { current } from "@/data/current";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { BookOpen, Hammer, FlaskConical } from "lucide-react";

const icons = {
    learning: BookOpen,
    building: Hammer,
    research: FlaskConical,
};

export default function CurrentProjects() {
    return (
        <section className="py-16 md:py-24">
            <FadeIn>
                <SectionHeading subtitle="What I'm focused on right now">
                    Current Focus
                </SectionHeading>
            </FadeIn>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {current.map((item, i) => {
                    const Icon = item.icon ? icons[item.icon] : BookOpen;
                    return (
                        <FadeIn key={item.title} delay={i * 0.1}>
                            <Card className="h-full">
                                <Icon size={22} className="mb-3 text-blue-400" />
                                <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {item.description}
                                </p>
                            </Card>
                        </FadeIn>
                    );
                })}
            </div>
        </section>
    );
}
