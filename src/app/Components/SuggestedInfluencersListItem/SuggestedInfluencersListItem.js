import React from 'react';
import PropTypes from 'prop-types';

import './SuggestedInfluencersListItem.css';

const SuggestedInfluencersListItem = ({ influencer }) => (
  <div className="suggested-list-item">
    <h5>Item</h5>
  </div>
);

SuggestedInfluencersListItem.propTypes = {
  influencer: PropTypes.object,
};

export default SuggestedInfluencersListItem;
