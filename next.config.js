/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Add this to handle the Supabase error
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig

