import React, { Component } from 'react';
import Dropdown from '../globals/Dropdown';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Reddit</h1>
        <Dropdown type="split-button" btnChildren="Click Me!">
          <h4>Hello!</h4>
          <h4>Hello!</h4>
          <h4>Hello!</h4>
          <h4>Hello!</h4>
          <h4>Hello!</h4>
        </Dropdown>
      </div>
    );
  }
}

export default App;
