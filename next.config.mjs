/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // GitHub needs the prefix, localhost needs it empty
  basePath: isProd ? '/My-Portfolio' : '',
  assetPrefix: isProd ? '/My-Portfolio' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;