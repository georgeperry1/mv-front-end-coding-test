import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SuggestedInfluencersListItem from '../SuggestedInfluencersListItem';

import './SuggestedInfluencersList.css';

class SuggestedInfluencersList extends Component {

  renderListItems = () => {
    const { suggested } = this.props;
    return suggested.map(influencer => {
      return (
        <SuggestedInfluencersListItem key={influencer.influencer_full_name} influencer={influencer}/>
      )
    });
  }

  render() {
    return (
      <div className="suggested-list-container">
        <div>
          {this.renderListItems()}
        </div>
      </div>
    )
  }
}

SuggestedInfluencersList.propTypes = {
  suggestedInfluencers: PropTypes.object,
};

export default SuggestedInfluencersList;
