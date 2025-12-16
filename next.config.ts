/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;