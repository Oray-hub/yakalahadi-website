import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'yakalahadi.com',
    'www.yakalahadi.com',
    'localhost:3000',
    '127.0.0.1:3000'
  ],
  // Admin dosyalarını serve et
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
    ];
  },
};

export default nextConfig;
