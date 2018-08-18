/**
 * @file Queries regarding user
 */
import { GraphQLInt } from 'graphql';

import { UserType } from './types';
import Database from '../../../util/db';

export const SingleUserQuery = {
  name: 'Single user query',
  type: UserType,
  args: {
    id: {
      description: 'ID of the user to look for',
      type: GraphQLInt,
    },
  },
  resolve: (src, {
    id,
  }) => {
    return Database.users.find(user => user.id === id);
  },
};
