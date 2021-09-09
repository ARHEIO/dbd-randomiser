// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  webpack: (config, { dev, isServer}) => {
    if (isServer) {
      return config;
    }

    console.log('%c%s', 'color: #00a3cc', 'asdfasdf');
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, 'node_modules/arheio.github.io.wiki/*'),
            to: path.join(__dirname, 'static/docs/[name][ext]'),
          },
        ]
      })
    );

    return config;
  }
}
