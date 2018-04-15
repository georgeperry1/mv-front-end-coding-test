import React from 'react';
import PropTypes from 'prop-types';

import './InfluencerInstagram.css';

const InfluencerInstagram = (props) => (
  <div className="influencer-instagram">
    <a
      className="influencer-instagram-link"
      href={`https://www.instagram.com/${props.influencer.influencer_instagram_username}`}
      target="_blank"
    >
      <img
        className="instagram-logo"
        src={require('../../Images/instagram-logo.png')}
        alt="instagram-logo"
      />
      <p className="influencer-username">{props.influencer.influencer_instagram_username}</p>
    </a>
  </div>
);

InfluencerInstagram.propTypes = {
  influencer: PropTypes.object,
};

export default InfluencerInstagram;
