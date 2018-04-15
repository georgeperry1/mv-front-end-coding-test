import React from 'react';
import PropTypes from 'prop-types';

import InfluencerImage from '../InfluencerImage';

import './SuggestedInfluencersListItem.css';

const SuggestedInfluencersListItem = ({ influencer }) => (
  <div className="suggested-list-item bobble">
    <InfluencerImage influencer={influencer}/>
    <div className="suggested-name-container">
      <p className="suggested-name">{influencer.influencer_full_name}</p>
      <p className="suggested-username">{influencer.influencer_instagram_username}</p>
    </div>
    <div className="suggested-add">
      +
    </div>
  </div>
);

SuggestedInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default SuggestedInfluencersListItem;
