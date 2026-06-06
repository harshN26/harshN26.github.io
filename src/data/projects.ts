import type { Project } from "@/types/Project";

/**
 * Add a project by appending to this array.
 * Fields: title, description, tags (optional), link (optional), featured (optional)
 */
export const projects: Project[] = [
    {
        title: "Aerial Drone Competition",
        description:
            "Wrote a custom path-following algorithm based on 10+ variables. Accurate to 0.1\".",
        tags: ["Robotics", "Algorithms", "Python"],
        featured: true,
    },
    {
        title: "FIRST Tech Challenge Robot",
        description:
            "Designed, built, coded, and documented an international award-winning FTC robot for the DECODE season.",
        tags: ["Robotics", "CAD", "Java", "Multithreading", "Soft skills"],
        featured: true,
    },
    {
        title: "Startup Project",
        description: "Building a startup — exploring product, engineering, and go-to-market.",
        tags: ["Entrepreneurship", "Full-Stack"],
        featured: false,
    },
];
