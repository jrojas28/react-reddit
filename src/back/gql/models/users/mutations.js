
/**
 * @file Mutations related to the User model.
 */
import { UserType, CreateUserInputType } from './types';
import { add } from '../../../util/db';
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
    if (input.password !== input.passwordConfirm) {
      throw new Error('Passwords do not match');
    }

    const user = generateUser(input);
    add('users', user);

    return user;
  },
};

