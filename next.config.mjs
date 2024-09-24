/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'www.sicredi.com.br',
                port: '',
            },
        ],
    },
}

export default nextConfig
