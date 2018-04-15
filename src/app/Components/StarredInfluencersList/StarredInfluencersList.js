import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarredInfluencersListItem from '../StarredInfluencersListItem';

import './StarredInfluencersList.css';

class StarredInfluencersList extends Component {

  renderListItems = () => {
    const { starred } = this.props;
    return starred.map(influencer => {
      return (
        <StarredInfluencersListItem key={influencer.influencer_full_name} influencer={influencer}/>
      )
    });
  }

  render() {
    return (
      <div className="starred-list-container">
        {this.renderListItems()}
      </div>
    )
  }
}

StarredInfluencersList.propTypes = {
  starred: PropTypes.array,
};

export default StarredInfluencersList;
