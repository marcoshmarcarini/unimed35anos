/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Define fallbacks para módulos do Node.js que não estão disponíveis no ambiente do navegador
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "child_process": false,
        "fs": false,
        "net": false,
        "tls": false,
      };
    }
    return config;
  },
};

export default nextConfig;
