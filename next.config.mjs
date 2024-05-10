/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "babysaffron.com"

      }
    ]
  }
};

export default nextConfig;
