/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
