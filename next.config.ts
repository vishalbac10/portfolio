/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'cdn.shopify.com',
      'wpastra.com',
      'cdn.dribbble.com',
      'placehold.co',
      'via.placeholder.com',
    ],
  },
};

module.exports = nextConfig;
