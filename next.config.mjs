// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Cho phép mọi hostname
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
