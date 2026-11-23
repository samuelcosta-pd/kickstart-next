import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ["10.10.241.113"],
  images: {
    // Configure allowed hostnames for Next.js Image Optimization
    remotePatterns: [
      ...(process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME
        ? [{ hostname: process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME }]
        : [
            { hostname: "images.contentstack.io" },
            { hostname: "*-images.contentstack.com" },
          ]),
    ],
  },
};

export default nextConfig;
