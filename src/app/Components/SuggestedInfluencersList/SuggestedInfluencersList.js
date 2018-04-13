import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SuggestedInfluencersListItem from '../SuggestedInfluencersListItem';

import './SuggestedInfluencersList.css';

class SuggestedInfluencersList extends Component {
  render() {
    return (
      <div className="suggested-list-container">
        <SuggestedInfluencersListItem />
      </div>
    )
  }
}

export default SuggestedInfluencersList;
