import { timeline } from "@/data/timeline";
import Timeline from "@/components/timeline/Timeline";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "Experience",
};

export default function ExperiencePage() {
    return (
        <div className="py-12 md:py-16">
            <PageHeader
                title="Experience"
                subtitle="Teams, roles, and academic background."
            />
            <Timeline items={timeline} />
        </div>
    );
}
