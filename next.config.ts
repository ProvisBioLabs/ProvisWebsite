import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Image Optimization ────────────────────────────────────────────
  images: {
    // Allow Next.js to optimize images from these external origins
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
    // Serve modern formats automatically
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Reasonable responsive sizes for breakpoints used in the design
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },

  // ─── HTTP Cache & Security Headers ─────────────────────────────────
  async headers() {
    return [
      {
        // Cache all static assets (JS, CSS, fonts, images) aggressively
        source: "/:path(.*\\.(?:jpg|jpeg|png|gif|webp|avif|ico|svg|woff2?|ttf|otf|eot))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Apply security headers to every page
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

  // ─── Compiler Tweaks ─────────────────────────────────────────────
  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable React strict mode for better error detection
  reactStrictMode: true,

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
};

export default nextConfig;
