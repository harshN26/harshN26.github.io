import type { TimelineItem as TimelineItemType } from "@/types/TimelineItem";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

export default function TimelineItem({ item, index }: { item: TimelineItemType; index: number }) {
    return (
        <FadeIn delay={index * 0.08} className="relative pl-8 md:pl-10">
            <div className="absolute left-0 top-2 flex h-full flex-col items-center">
                <div className="h-3 w-3 rounded-full border-2 border-blue-500 bg-blue-500/20" />
                <div className="mt-1 w-px flex-1 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </div>

            <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
                    {item.date && (
                        <span className="text-sm text-zinc-500">{item.date}</span>
                    )}
                </div>
                {item.subtitle && (
                    <p className="mt-1 text-sm text-blue-400">{item.subtitle}</p>
                )}
                {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {item.description}
                    </p>
                )}
            </Card>
        </FadeIn>
    );
}
