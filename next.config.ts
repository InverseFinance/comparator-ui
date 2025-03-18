import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'inverse.finance', 'assets.coingecko.com', 'cdn.jsdelivr.net'],
    // loader: 'custom',
    // loaderFile: './components/ui/image.tsx',
  },
};

export default nextConfig;
