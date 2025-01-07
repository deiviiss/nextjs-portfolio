const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  images: {
    domains: ['repository-images.githubusercontent.com', 'avatars.githubusercontent.com', 'raw.githubusercontent.com', 'res.cloudinary.com']
  }
}

module.exports = withBundleAnalyzer(nextConfig)
