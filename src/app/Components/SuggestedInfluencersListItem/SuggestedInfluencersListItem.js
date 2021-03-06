import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddInfluencer from '../AddInfluencer';
import InfluencerImage from '../InfluencerImage';
import InfluencerInstagram from '../InfluencerInstagram';

import './SuggestedInfluencersListItem.css';

class SuggestedInfluencersListItem extends Component {
  render() {
    const { influencer } = this.props;
    return (
      <div className="suggested-list-item bobble">
        <InfluencerImage influencer={influencer}/>
        <div className="suggested-name-container">
          <p className="suggested-name">{influencer.influencer_full_name}</p>
          <InfluencerInstagram influencer={influencer}/>
        </div>
        <AddInfluencer influencer={influencer}/>
      </div>
    )
  }
}

SuggestedInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default SuggestedInfluencersListItem;
