import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import './SortingControl.css';

class SortingControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
    }
  }

  handleChange = (e) => {
    const { starredInfluencers } = this.props;
    this.setState({
      sortBy: e.target.value
    });
    this.props.sortInfluencers(e.target.value, starredInfluencers);
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
      <option
        className="sort-by-label"
        key={label}
        value={label}
      >
        {label}
      </option>
    ))
  }

  render() {
    return (
      <div className="sorting-control-container">
        <p className="sorting-control-label">Sort by:</p>
        <select
          className="sorting-control-menu"
          onChange={this.handleChange}
          value={this.state.sortBy}
        >
          {this.listItems()}
        </select>
      </div>
    )
  }
}

SortingControl.propTypes = {
  suggestedInfluencers: PropTypes.array,
  starredInfluencers: PropTypes.array,
  order: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    suggestedInfluencers: state.suggestedInfluencers,
    starredInfluencers: state.starredInfluencers,
  }
}

const mapDispatchToProps = dispatch => ({
  sortInfluencers: (order, starredInfluencers) => dispatch(actions.sortInfluencers(order, starredInfluencers))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingControl);
