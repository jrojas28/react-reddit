
/**
 * @file User related Mutations.
 */
import gql from 'graphql-tag';

import { userBasicDetails } from '../fragments/users';

export const CreateUserMutation = gql`
  mutation createUser($input: CreateUserInputType!) {
    createUser(input: $input) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;
