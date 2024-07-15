/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/rpc',
        destination: process.env.NEXT_PUBLIC_RPC_URL,
      },
    ];
  },
};

export default nextConfig;
