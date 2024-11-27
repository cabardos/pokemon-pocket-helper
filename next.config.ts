import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/pokemon-tcg-pocket-deckmaster',
  assetPrefix: '/pokemon-tcg-pocket-deckmaster/',
};

export default nextConfig;
