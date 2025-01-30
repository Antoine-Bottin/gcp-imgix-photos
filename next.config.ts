import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        domains: ['antoinebottin-gcp.imgix.net'],
        unoptimized: true,
    },
}

export default nextConfig
