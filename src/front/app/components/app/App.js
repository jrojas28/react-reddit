import React, { Component } from 'react';
import Dropdown from '../globals/Dropdown';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Reddit</h1>
        <Dropdown>
          <h1>Hello!</h1>
        </Dropdown>
      </div>
    );
  }
}

export default App;
