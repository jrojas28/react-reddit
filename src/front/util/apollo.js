/**
 * @file Apollo related utility.
 */
import ApolloClient from 'apollo-boost';
import { getConfig } from './config';

export const getApolloClient = () => {
  const {
    graphqlEndpoint,
  } = getConfig();

  return new ApolloClient({
    uri: graphqlEndpoint,
  });
};
