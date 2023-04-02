/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    modules: {
      transform: 'modules/{{member}}',
    },
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  images: {
    domains: ['lh3.googleusercontent.com', 's.gravatar.com', 'images.unsplash.com'],
    deviceSizes: [20, 40, 60, 100],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
