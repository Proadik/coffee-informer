/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '.',
  images: {
    unoptimized: true,
    domains: [
      'loremflickr.com',
    ],
  },
};

module.exports = nextConfig;
