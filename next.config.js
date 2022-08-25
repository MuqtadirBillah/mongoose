/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MongoDB_Password:'',
  }
}

module.exports = nextConfig
