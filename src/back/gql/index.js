import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import query from './query';

// The GraphQL schema
const schema = new GraphQLSchema({
  query,
});

export default new ApolloServer({ schema });
