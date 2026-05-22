import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["192.168.31.161"],
  experimental: {
    turbopackMemoryLimit: 1073741824,
  },
};

export default nextConfig;
