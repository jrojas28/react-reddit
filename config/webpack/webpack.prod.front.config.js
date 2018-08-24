/**
 * @file Webpack production config
 */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../../src/front/index.js'),
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: path.join(__dirname, '../../dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
};
