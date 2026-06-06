export type Certificate = {
    title: string;
    issuer: string;
    date?: string;
    link?: string;
};

/**
 * Add certificates and credentials here.
 */
export const certificates: Certificate[] = [
    {
        title: "Add your first credential",
        issuer: "Issuer name",
        date: "2025",
    },
];
