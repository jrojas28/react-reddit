/**
 * @file Mutation type definitions
 */
import { GraphQLObjectType } from 'graphql';
import { CreateUserMutation } from './models/users/mutations';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CreateUserMutation,
  },
});

export default mutation;
