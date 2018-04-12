import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SuggestedInfluencersList from '../SuggestedInfluencersList';

import './SuggestedInfluencers.css';

class SuggestedInfluencers extends Component {

  renderSuggestedInfluencers() {
    //TODO: Add 'no items in list'
    return (
      <SuggestedInfluencersList />
    );
  }

  render() {
    return (
      <div className="suggested-container">
        <h5 className="suggested-header">Suggested Influencers</h5>
        <div>
          {this.renderSuggestedInfluencers()}
        </div>
      </div>
    )
  }
}

export default SuggestedInfluencers;
