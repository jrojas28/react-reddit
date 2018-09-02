/**
 * @file setup Hot module reloading.
 */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import clientWebpackConfig from '../../../config/webpack/webpack.dev.front.config';
import { isDev } from './config';

const clientCompiler = webpack(clientWebpackConfig);

export default (app) => {
  // Only do this on dev
  if (isDev()) {
    return;
  }

  app.use(webpackDevMiddleware(clientCompiler, {
    noInfo: true, publicPath: clientWebpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(clientCompiler));
};
