/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix deprecated experimental.turbo - move to turbopack
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [ '@svgr/webpack' ],
        as: '*.js',
      },
    },
  },

  // GitHub Pages configuration
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',

  images: {
    unoptimized: true, // Required for static export
    domains: [
      'localhost',
      'images.unsplash.com',
      'res.cloudinary.com',
      'firebasestorage.googleapis.com'
    ],
    formats: [ 'image/webp', 'image/avif' ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [ '@svgr/webpack' ],
    });
    return config;
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
