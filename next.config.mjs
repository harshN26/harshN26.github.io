/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    basePath: process.env.NODE_ENV === "production"
        ? "/harshN26.github.io"
        : ""
};

export default nextConfig;