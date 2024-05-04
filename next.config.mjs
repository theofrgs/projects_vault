/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com'
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com'
      },
      {
        protocol: 'http',
        hostname: 'image.tmdb.org'
      },
      {
        protocol: 'https',
        hostname: 'youtu.be'
      }
    ]
  }
};

export default nextConfig;
