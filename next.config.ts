import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimize for serverless deployment */
  output: 'standalone', // Creates a standalone build optimized for serverless environments
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure Trailing Slash behavior
  trailingSlash: false,
  
  // Enable newer webpack features
  experimental: {
    // Enable serverless optimization
    serverMinification: true,
    // Better tree-shaking and smaller bundles
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
