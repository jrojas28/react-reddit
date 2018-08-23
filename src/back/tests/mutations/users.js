
/**
 * User related Mutations.
 */
import { userBasicDetails } from '../fragments/users';

export const createUserMutation = `
  mutation createUser($input: CreateUserInputType!) {
    createUser(input: $input) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;
