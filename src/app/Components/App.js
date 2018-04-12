import { connect } from 'react-redux';
import React, { Component } from 'react';

import AppHeader from './AppHeader';
import SuggestedInfluencers from './SuggestedInfluencers';
import StarredInfluencers from './StarredInfluencers';

import '../Styles/skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AppHeader />
        <SuggestedInfluencers />
        <StarredInfluencers />
      </div>
    )
  }
}

// export default connect(null, null)(App);
export default App;
