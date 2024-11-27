import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disables automatic optimization for exported builds
  },
};

export default nextConfig;
