
/**
 * @file Mutations related to the User model.
 */
import { UserType, CreateUserInputType } from './types';
import Database, { add } from '../../../util/db';
import { generateUser } from '../../../util/user';

/**
 * Mutation that enables to create a new user
 */
export const CreateUserMutation = {
  name: 'CreateUser',
  type: UserType,
  args: {
    input: {
      type: CreateUserInputType,
    },
  },
  resolve: (src, {
    input,
  }) => {
    if (Database.users.some(user => user.username === input.username)) {
      throw new Error('username is already taken');
    }

    if (Database.users.some(user => user.email === input.email)) {
      throw new Error('email is already taken');
    }

    if (input.password !== input.passwordConfirm) {
      throw new Error('passwords do not match');
    }

    const user = generateUser(input);
    add('users', user);

    return user;
  },
};

