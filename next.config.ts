import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Native and WebAssembly packages must not be bundled into the server build.
  serverExternalPackages: ["@electric-sql/pglite", "pg", "@aws-sdk/client-s3", "@aws-sdk/s3-request-presigner"],
};

export default nextConfig;
