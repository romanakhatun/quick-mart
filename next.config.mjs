/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "img.garagepotti.xyz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
