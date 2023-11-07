const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );

    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {  reactStrictMode: false,}

module.exports = nextConfig

