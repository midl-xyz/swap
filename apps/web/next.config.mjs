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

    // Ensure bitcoinjs-lib gets a valid ECC implementation
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'tiny-secp256k1': '@bitcoinerlab/secp256k1',
      secp256k1: '@bitcoinerlab/secp256k1',
    };

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
