/**
 * @file User related fragments
 */
import gql from 'graphql-tag';

export const userBasicDetails = gql`
  fragment userBasicDetails on User {
    id
    name
    email
    username
  }
`;
