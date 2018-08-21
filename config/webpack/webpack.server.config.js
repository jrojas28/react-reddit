const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, '../../src/back/index.js'),
  externals: [nodeExternals()],
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: 'dist',
    filename: 'server.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
    ],
  },
  devtool: 'source-map',
};
