const path = require('path');

module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {
      configPath: path.resolve(__dirname, 'panda.config.ts'),
    },
  },
};
