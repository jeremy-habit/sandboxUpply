/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/shipper/:tab',
        destination: '/shipper?tab=:tab',
      },
    ]
  },
}

module.exports = nextConfig
