/**
 * @file User model type definition
 */
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { RecordID } from '../global/types';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Single user item',
  fields: {
    id: {
      type: RecordID,
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
