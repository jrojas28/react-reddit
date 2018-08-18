/**
 * @file Queries regarding user
 */
import { GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';

import { UserType } from './types';
import Database from '../../../util/db';
import { getSliceArgs, getSlicedList } from '../../../util/gql';

export const SingleUserQuery = {
  name: 'User',
  type: UserType,
  args: {
    id: {
      description: 'ID of the user to look for',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (src, {
    id,
  }) => {
    return Database.users.find(user => user.id === id);
  },
};

export const ListUserQuery = {
  name: 'Users',
  type: new GraphQLList(UserType),
  args: {
    ...getSliceArgs(),
  },
  resolve: (src, {
    slice = {},
  }) => {
    return getSlicedList(Database.users, slice);
  },
};
