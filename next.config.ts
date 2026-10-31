import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  distDir: ".next-build",
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
