import { getProjects } from "@/lib/getProjects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "Projects",
};

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="py-12 md:py-16">
            <PageHeader
                title="Projects"
                subtitle="Hardware, software, and engineering work."
            />
            <ProjectGrid projects={projects} />
        </div>
    );
}
