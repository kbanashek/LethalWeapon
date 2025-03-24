/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/LethalWeapon',
  assetPrefix: '/LethalWeapon/',
  images: {
    unoptimized: true,
  },
  // This is needed for the export to work properly in Next.js 14+
  distDir: 'out',
}

module.exports = nextConfig
