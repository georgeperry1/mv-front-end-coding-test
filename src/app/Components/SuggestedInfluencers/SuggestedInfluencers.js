import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import SuggestedInfluencersList from '../SuggestedInfluencersList';

import './SuggestedInfluencers.css';

class SuggestedInfluencers extends Component {

  componentDidMount() {
    this.props.getSuggestedInfluencers();
  }

  renderSuggestedInfluencers() {
    //TODO: Add 'no items in list'
    return (
      <SuggestedInfluencersList />
    );
  }

  render() {
    return (
      <div className="suggested-container">
        <h5 className="suggested-header">Suggested Influencers</h5>
        <div>
          {this.renderSuggestedInfluencers()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestedInfluencers: state.suggestedInfluencers,
  }
}

const mapDispatchToProps = dispatch => ({
  getSuggestedInfluencers: () => dispatch(actions.getSuggestedInfluencers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedInfluencers);
