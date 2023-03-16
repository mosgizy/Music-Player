"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: {
    domains: ['i.scdn.co']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
module.exports = nextConfig;