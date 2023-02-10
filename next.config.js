/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/shipper/:tab/:panel',
        destination: '/shipper?tab=:tab&panel=:panel',
      },
    ]
  },
}

module.exports = nextConfig
