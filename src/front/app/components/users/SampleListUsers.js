/**
 * @file Sample list users component.
 * This file has no worry for styles and is only here to serve the purpose of showing
 * how to implement Apollo. Check the file
 * /containers/sampleListUsers to see where most props are coming from.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleListUsers extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })),
    loading: PropTypes.bool,
  };

  render() {
    const {
      users,
      loading,
    } = this.props;

    if (loading || !users) {
      return 'loading...';
    }

    return (
      <div>
        <h1>First few users in DB: </h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SampleListUsers;
