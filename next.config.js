// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  basePath: '/dbd-randomiser',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: !debug ? '' : '',
  webpack: (config, { isServer }) => {
    return config;
  }
};
