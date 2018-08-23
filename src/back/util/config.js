/**
 * @file Configuration helper related methods.
 */
import config from 'config';

export const frontEndConfig = () => {
  const baseUrl = config.get('baseUrl');

  return {
    baseUrl,
    graphqlEndpoint: `${baseUrl}graphql`,
  };
};
