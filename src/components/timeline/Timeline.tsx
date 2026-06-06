import type { TimelineItem as TimelineItemType } from "@/types/TimelineItem";
import TimelineItem from "./TimelineItem";

export default function Timeline({ items }: { items: TimelineItemType[] }) {
    if (!items.length) {
        return (
            <p className="text-zinc-400">No experience entries yet. Add them in <code className="text-zinc-300">src/data/timeline.ts</code>.</p>
        );
    }

    return (
        <div className="space-y-6">
            {items.map((item, i) => (
                <TimelineItem key={`${item.title}-${i}`} item={item} index={i} />
            ))}
        </div>
    );
}
