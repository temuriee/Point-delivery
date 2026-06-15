import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@pikri/api-types"],
  turbopack: {},
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
