/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",

  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};
