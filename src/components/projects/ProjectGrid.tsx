import type { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    if (!projects?.length) {
        return (
            <p className="text-zinc-400">
                No projects yet. Add them in{" "}
                <code className="text-zinc-300">src/data/projects.ts</code>.
            </p>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
            ))}
        </div>
    );
}
