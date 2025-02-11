/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["v0.blob.com", "placehold.co"],
  },
}

module.exports = nextConfig
