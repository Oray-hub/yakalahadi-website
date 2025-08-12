import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'yakalahadi.com',
    'www.yakalahadi.com',
    'localhost:3000',
    '127.0.0.1:3000'
  ],
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
