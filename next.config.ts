import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: "/portfolio",
                destination: "/",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
