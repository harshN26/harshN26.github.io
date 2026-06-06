import { research } from "@/data/research";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
    title: "Research",
};

export default function ResearchPage() {
    return (
        <div className="py-12 md:py-16">
            <PageHeader
                title="Research"
                subtitle="Academic and technical exploration."
            />

            {research.length > 0 ? (
                <div className="space-y-6">
                    {research.map((entry, i) => (
                        <FadeIn key={entry.title} delay={i * 0.08}>
                            <Card>
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h2 className="text-xl font-semibold text-zinc-100">
                                        {entry.title}
                                    </h2>
                                    {entry.date && (
                                        <span className="text-sm text-zinc-500">{entry.date}</span>
                                    )}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                    {entry.description}
                                </p>
                                {entry.tags && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {entry.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                                {entry.link && (
                                    <a
                                        href={entry.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
                                    >
                                        Read more →
                                    </a>
                                )}
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            ) : (
                <p className="text-zinc-400">
                    No research entries yet. Add them in{" "}
                    <code className="text-zinc-300">src/data/research.ts</code>.
                </p>
            )}
        </div>
    );
}
