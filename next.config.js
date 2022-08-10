// // module.exports = {
// //   reactStrictMode: true,
// // }
// import("next").NextConfig;
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
//   async redirects() {
//     return [
//       {
//         source: "/mypage",
//         destination: "/mypage/item",
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/mypage",
        destination: "/mypage/item",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
