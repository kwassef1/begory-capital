import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    async redirects() {
        return [
            {
                // Temporary — remove when portfolio page is ready to publish
                source: "/portfolio",
                destination: "/",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
