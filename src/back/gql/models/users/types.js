/**
 * @file User model type definition
 */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql';
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
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export const CreateUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInputType',
  description: 'Input needed to create an User record',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default UserType;
