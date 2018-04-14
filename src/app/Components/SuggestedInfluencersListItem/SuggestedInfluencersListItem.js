import React from 'react';
import PropTypes from 'prop-types';

import './SuggestedInfluencersListItem.css';

const SuggestedInfluencersListItem = ({ influencer }) => (
  <div className="suggested-list-item">
    <img src={influencer.influencer_instagram_profile_image} alt="suggested-icon"/>
    <p>{influencer.influencer_full_name}</p>
  </div>
);

SuggestedInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default SuggestedInfluencersListItem;
