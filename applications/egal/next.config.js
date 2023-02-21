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
};

module.exports = nextConfig;
