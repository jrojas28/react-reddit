/**
 * @file Main App component
 */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import SampleListUsersContainer from '../../containers/SampleListUsersContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SampleListUsersContainer />
      </div>
    );
  }
}

export default hot(module)(App);
