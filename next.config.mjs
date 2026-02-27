import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed static export to allow dynamic routes
  // output: 'export',
  images: {
    unoptimized: true,
    domains: [],
  },
  // Use default build directory so Next.js creates `.next` (required for non-export builds)
  // distDir: 'out',
  // Fix turbopack root warning
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
