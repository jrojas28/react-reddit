/**
 * @file Query type definitions
 */
import { GraphQLObjectType } from 'graphql';
import { SingleUserQuery } from './models/users/queries';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: SingleUserQuery,
  },
});

export default query;
