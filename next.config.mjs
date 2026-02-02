const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1330',
        pathname: '/uploads/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;