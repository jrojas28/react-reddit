/**
 * @file Queries regarding user
 */
import { GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';

import { UserType } from './types';
import Database from '../../../util/db';
import { getSliceArgs, getSlicedList } from '../../../util/gql';

/**
 * Query to get a single user.
 */
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

/**
 * Query to get the list of users out of the database.
 */
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
