import { projects } from "@/data/projects";
import type { Project } from "@/types/Project";

export function getProjects(): Project[] {
    return projects;
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}
