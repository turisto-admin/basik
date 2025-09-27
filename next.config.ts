import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'fast.wistia.com'
      }
    ]
    
  },
  
};

export default nextConfig;
