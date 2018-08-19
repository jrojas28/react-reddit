
/**
 * User related queries.
 */

import { userBasicDetails } from '../fragments/users';

export const queryAllUsers = `
  query users($slice: SliceArgs) {
    users(slice: $slice) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;

export const querySingleUser = `
  query users($id: Int!) {
    user(id: $id) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;
