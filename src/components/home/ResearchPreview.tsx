import { research } from "@/data/research";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ResearchPreview() {
    const preview = research.slice(0, 2);

    return (
        <section className="py-16 md:py-24">
            <FadeIn>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading subtitle="Academic and technical exploration">
                        Research
                    </SectionHeading>
                    <Button href="/research" variant="ghost" className="!px-0">
                        View all →
                    </Button>
                </div>
            </FadeIn>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {preview.length > 0 ? (
                    preview.map((entry, i) => (
                        <FadeIn key={entry.title} delay={i * 0.1}>
                            <Card className="h-full">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    {entry.title}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400">{entry.description}</p>
                                {entry.tags && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {entry.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </FadeIn>
                    ))
                ) : (
                    <FadeIn>
                        <Card hover={false}>
                            <p className="text-zinc-400">
                                No research entries yet. Add them in{" "}
                                <code className="text-zinc-300">src/data/research.ts</code>.
                            </p>
                        </Card>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
