/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },


      {
        protocol: 'https',
        hostname: 'www.shetu.mathmozo.com',
      },
      {
        protocol: 'http',
        hostname: 'www.shetu.mathmozo.com',
      },

    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.shetu.mathmozo.com/api/v1/:path*",

      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
