const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/front/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: path.join(__dirname, '../../dist'),
    filename: 'reddit.bundle.js',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
