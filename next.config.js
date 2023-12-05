/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [{ hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "media.istockphoto.com" }],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;