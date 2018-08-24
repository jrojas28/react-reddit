
/**
 * @file User related queries.
 */
import gql from 'graphql-tag';

import { userBasicDetails } from '../fragments/users';

export const Users = gql`
  query users(
    $offset: Int = 0
    $limit: Int = 25
  ) {
    users(slice: {
      offset: $offset
      limit: $limit
    }) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;

export const UserById = `
  query users($id: Int!) {
    user(id: $id) {
      id
      ...userBasicDetails
    }
  }
  ${userBasicDetails}
`;
