/**
 * @file Query type definitions
 */
import { GraphQLObjectType } from 'graphql';
import { SingleUserQuery, ListUserQuery } from './models/users/queries';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: SingleUserQuery,
    users: ListUserQuery,
  },
});

export default query;
