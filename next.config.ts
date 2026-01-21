import type { NextConfig } from "next";

// This pulls the variable from the .env file you created in the workflow
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  // --- REQUIRED FOR GITHUB PAGES ---
  output: "export",          // Tells Next.js to generate static HTML files
  basePath: basePath,        // Tells Next.js to load assets from /portfolio, not /
  trailingSlash: true,       // Creates folder structure /about/index.html instead of /about.html
  images: {
    unoptimized: true,       // Required because GitHub Pages cannot optimize images on the fly
  },
  
  // --- YOUR NEW SVG CONFIG ---
  webpack(config) {
    // 1. Grab the existing rule that handles SVG imports
    // @ts-expect-error - rules is a generic array
    const fileLoaderRule = config.module.rules.find((rule) => 
      rule.test instanceof RegExp && rule.test.test?.('.svg')
    );

    // 2. Modify the rules
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // 3. Modify the existing file-loader rule to ignore *.svg, since we handle it now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;