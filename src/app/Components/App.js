import { connect } from 'react-redux';
import React, { Component } from 'react';

import AppHeader from './AppHeader';

import '../Styles/skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AppHeader />
        <h1>Hello</h1>
      </div>
    )
  }
}

// export default connect(null, null)(App);
export default App;
