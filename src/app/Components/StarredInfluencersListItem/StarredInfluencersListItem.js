import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InfluencerImage from '../InfluencerImage';
import InfluencerInstagram from '../InfluencerInstagram';

import './StarredInfluencersListItem.css';

class StarredInfluencersListItem extends Component {
  render() {
    const { influencer } = this.props;
    const followers = influencer.statistics.followers;
    const engagement = influencer.statistics.engagement;
    return (
      <div className="starred-list-item bobble">
        <InfluencerImage influencer={influencer}/>
        <div className="starred-name-container">
          <p className="starred-name">{influencer.influencer_full_name}</p>
          <InfluencerInstagram influencer={influencer}/>
        </div>
        <div className="starred-followers">
          <p className="starred-stats">{followers}</p>
          <p className="starred-label">Followers</p>
        </div>
        <div className="starred-engagement">
          <p className="starred-stats">{engagement}%</p>
          <p className="starred-label">Engagement</p>
        </div>
      </div>
    )
  }
}

StarredInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default StarredInfluencersListItem;
