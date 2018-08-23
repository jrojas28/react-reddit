/**
 * @file Sample list users Container.
 * Shows how to implement react with list users query.
 */
import { compose, graphql } from 'react-apollo';
import SampleListUsers from '../components/users/SampleListUsers';
import { Users } from '../queries/users';

const withListUsers = graphql(Users, {
  // Use options to pass variables.
  // It takes `ownProps` as params.
  options: () => ({
    variables: {
      limit: 25,
    },
  }),
  // Function that takes as an argument all GQL
  // related stuff. Returns an object that will be assigned as props
  // for SampleListUsers
  props: ({
    ownProps,
    data: {
      users,
    },
    loading,
  }) => ({
    loading,
    users,
    // Serves just so you remembe you can use ownProps here.
    propFromOwnProps: ownProps.something,
  }),
});

export default compose(
  withListUsers,
)(SampleListUsers);
