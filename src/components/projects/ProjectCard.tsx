import type { Project } from "@/types/Project";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const content = (
        <Card className="h-full flex flex-col">
            <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
            </p>
            {project.tags && project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            )}
            {project.link && (
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">
                    View project <ArrowUpRight size={14} />
                </span>
            )}
        </Card>
    );

    return (
        <FadeIn delay={index * 0.08}>
            {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {content}
                </a>
            ) : (
                content
            )}
        </FadeIn>
    );
}
