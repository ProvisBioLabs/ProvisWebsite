/** @type {import('next').NextConfig} */
const nextConfig = {
    // ─── Image Optimization ────────────────────────────────────────────
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'logo.clearbit.com',
            },
        ],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60 * 60 * 24 * 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 64, 96, 128, 256, 384],
    },

    // ─── HTTP Cache & Security Headers ─────────────────────────────────
    async headers() {
        return [
            {
                source: "/:path(.*\\.(?:jpg|jpeg|png|gif|webp|avif|ico|svg|woff2?|ttf|otf|eot))",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "origin-when-cross-origin" },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },

    // ─── Redirects ──────────────────────────────────────────────────
    async redirects() {
        return [
            {
                source: "/products/reagent",
                destination: "/products/recombinant-bio-reagents",
                permanent: true,
            },
        ];
    },

    // ─── Compiler Tweaks ─────────────────────────────────────────────
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    reactStrictMode: true,
};

export default nextConfig;
