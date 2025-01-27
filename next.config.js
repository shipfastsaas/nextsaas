/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver la génération statique pour les routes API
  experimental: {
    workerThreads: false,
  },
  // Configuration spécifique pour les routes API
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
