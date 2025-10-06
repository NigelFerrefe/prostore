import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        'C:/Users/Nigel/Application Data/**',
        'C:\\Users\\Nigel\\Application Data\\**',
      ],
    };
    return config;
  },
};

export default nextConfig;
