import { connect } from 'react-redux';
import React, { Component } from 'react';

import AppHeader from './AppHeader';
import SuggestedInfluencers from './SuggestedInfluencers';
import StarredInfluencers from './StarredInfluencers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <AppHeader />
        <SuggestedInfluencers />
        <StarredInfluencers />
      </div>
    )
  }
}

export default App;
