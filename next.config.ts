// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// const nextConfig = {
//   images: {
//     domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.node/,
//       use: "raw-loader",
//     });
// return config;
//   },
// };
// module.exports = nextConfig;

// const nextConfig = {
//   images: {
//     domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
//   },
//   webpack: (config: import("webpack").Configuration) => {
//     config.module?.rules?.push({
//       test: /\.node/,
//       use: "raw-loader",
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;


const nextConfig = {
  images: {
    domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
  },
  webpack: (config: any) => {
    config.module?.rules?.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
