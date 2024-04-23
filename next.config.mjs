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
      }
    ]
  }
};

export default nextConfig;
