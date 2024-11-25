import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/pokemon-pocket-helper',
  assetPrefix: '/pokemon-pocket-helper/',
};

export default nextConfig;
