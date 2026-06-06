import { getFeaturedProjects } from "@/lib/getProjects";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <section className="py-16 md:py-24">
            <FadeIn>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading subtitle="Hardware, software, and everything in between">
                        Featured Projects
                    </SectionHeading>
                    <Button href="/projects" variant="ghost" className="!px-0">
                        View all →
                    </Button>
                </div>
            </FadeIn>

            <div className="mt-8">
                <ProjectGrid projects={projects} />
            </div>
        </section>
    );
}
