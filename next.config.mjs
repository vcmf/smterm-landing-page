/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted anywhere (GitHub Pages, Vercel, S3, ...).
  output: "export",
  images: { unoptimized: true },
}

export default nextConfig
