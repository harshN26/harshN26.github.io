import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://harshn26.github.io/harshn26.github.io"
        : "http://localhost:3000";

const routes = [
    "",
    "/projects",
    "/experience",
    "/research",
    "/credentials",
    "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));
}
