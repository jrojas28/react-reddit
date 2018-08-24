/**
 * @file Configuration helper related methods.
 */
import config from 'config';

/**
 * Returns config to be used in the front-end
 */
export const frontEndConfig = () => {
  const baseUrl = config.get('baseUrl');

  return {
    baseUrl,
    graphqlEndpoint: `${baseUrl}graphql`,
  };
};

/**
 * Checks if current environment is dev.
 */
export const isDev = () => {
  return process.env.NODE_ENV === 'dev';
};
