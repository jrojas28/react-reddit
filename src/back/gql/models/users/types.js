/**
 * @file User model type definition
 */
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Single user item',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
  },
});

export default UserType;
