const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  images: {
    domains: ['repository-images.githubusercontent.com', 'avatars.githubusercontent.com']
  }
}

module.exports = withBundleAnalyzer(nextConfig)
