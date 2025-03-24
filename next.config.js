/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/LethalWeapon' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/LethalWeapon' : '',
  images: {
    unoptimized: true,
  },
  // This is needed for the export to work properly in Next.js 14+
  distDir: 'out',
}

module.exports = nextConfig
