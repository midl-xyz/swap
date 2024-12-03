// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const config = {
  webpack(config) {
    config.experiments = {
      ...(config.experiments || {}),
      asyncWebAssembly: true,
      topLevelAwait: true,
    };

    return config;
  },
};

export default config;
