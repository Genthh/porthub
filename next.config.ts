/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack(config: {
    cache: boolean;
    module: { rules: { test: RegExp; use: string[] }[] };
    resolve: { alias: any };
  }) {
    config.cache = false;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      handlebars: "handlebars/dist/handlebars.js",
    };

    return config;
  },
  env: {
    customKey: process.env.API_URL,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
