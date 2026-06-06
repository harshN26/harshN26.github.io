export type ResearchEntry = {
    title: string;
    description: string;
    date?: string;
    link?: string;
    tags?: string[];
};

/**
 * Add research entries here.
 */
export const research: ResearchEntry[] = [
    {
        title: "Computer Systems & Architecture",
        description:
            "Exploring topics in computer systems, architecture, and software design.",
        tags: ["Systems", "Architecture"],
    },
];
