/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bananatest' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bananatest' : '',
}

module.exports = nextConfig