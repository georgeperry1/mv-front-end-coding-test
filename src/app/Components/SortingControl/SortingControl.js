import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SortingControl.css';

class SortingControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Name (A - Z)',
    }
  }

  handleClick = () => {
    console.log('CLICK');
  }

  listItems = () => {
    const sortBy = [
      'Name (A - Z)',
      'Name (Z - A)',
      'Followers (High - Low)',
      'Followers (Low - High)',
      'Engagement (High - Low)',
      'Engagement (Low - High)'
    ];
    return sortBy.map(label => (
      <option className="sort-by-label" key={label}>{label}</option>
    ))
  }

  render() {
    return (
      <div className="sorting-control-container">
        <p className="sorting-control-label">Sort by:</p>
        <select className="sorting-control-menu">
          {this.listItems()}
        </select>
      </div>
    )
  }
}

SortingControl.propTypes = {
  suggestedInfluencer: PropTypes.array,
  starredInfluencer: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    suggestedInfluencers: state.suggestedInfluencers,
    starredInfluencers: state.starredInfluencers,
  }
}

export default connect(mapStateToProps, null)(SortingControl);
