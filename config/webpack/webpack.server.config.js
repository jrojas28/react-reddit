const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  // Always dev unless production clearly specified.
  mode: process.env.NODE_ENV !== 'production'
    ? 'development'
    : 'production',
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
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
  ],
};
