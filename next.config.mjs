/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "s1.pluton-pro.com",
      },
    ],
  },
};

export default nextConfig;
