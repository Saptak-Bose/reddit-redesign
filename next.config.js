/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "firebasestorage.googleapis.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
