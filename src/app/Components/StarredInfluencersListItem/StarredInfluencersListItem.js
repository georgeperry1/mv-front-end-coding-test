import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InfluencerImage from '../InfluencerImage';
import InfluencerInstagram from '../InfluencerInstagram';

import './StarredInfluencersListItem.css';

class StarredInfluencersListItem extends Component {
  render() {
    const { influencer } = this.props;
    return (
      <div className="starred-list-item bobble">
        <InfluencerImage influencer={influencer}/>
        <div className="starred-name-container">
          <p className="starred-name">{influencer.influencer_full_name}</p>
          <InfluencerInstagram influencer={influencer}/>
        </div>
      </div>
    )
  }
}

StarredInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default StarredInfluencersListItem;
