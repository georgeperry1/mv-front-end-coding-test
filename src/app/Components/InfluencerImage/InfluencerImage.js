import React from 'react';
import PropTypes from 'prop-types';

import './InfluencerImage.css';

const InfluencerImage = (props) => (
  <div className="influencer-image-border">
    <img
      className="influencer-image"
      src={props.influencer.influencer_instagram_profile_image}
      alt="influencer-image"
    />
  </div>
);

InfluencerImage.propTypes = {
  influencer: PropTypes.object,
};

export default InfluencerImage;
