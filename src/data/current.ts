export type CurrentFocus = {
    title: string;
    description: string;
    icon?: "learning" | "building" | "research";
};

/**
 * What you're currently working on — shown on the home page.
 */
export const current: CurrentFocus[] = [
    {
        title: "Learning",
        description:
            "Computer architecture, programming fundamentals, and systems design.",
        icon: "learning",
    },
    {
        title: "Building",
        description:
            "Personal tools, web applications, and engineering projects.",
        icon: "building",
    },
    {
        title: "Exploring",
        description:
            "VLSI, semiconductor design, and deep-tech entrepreneurship.",
        icon: "research",
    },
];
