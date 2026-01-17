/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'My-Portfolio' with your exact GitHub repository name
  basePath: '/My-Portfolio', 
  assetPrefix: '/My-Portfolio',
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