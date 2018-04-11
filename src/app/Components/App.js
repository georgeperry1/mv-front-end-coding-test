'use strict';

import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default connect(null, null)(App);
