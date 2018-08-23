import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import query from './query';
import mutation from './mutation';

// The GraphQL schema
const schema = new GraphQLSchema({
  query,
  mutation,
});

export default new ApolloServer({
  schema,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
    },
  },
});
