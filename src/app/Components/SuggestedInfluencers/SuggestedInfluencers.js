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

  renderLoading = () => <Loader />;

  renderSuggestedInfluencers() {
    if (!this.props.suggestedInfluencers) {
      this.renderLoading();
    }
    return (
      <SuggestedInfluencersList suggested={this.props.suggestedInfluencers}/>
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

SuggestedInfluencers.propTypes = {
  getSuggestedInfluencers: PropTypes.func,
  suggestedInfluencers: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    suggestedInfluencers: state.suggestedInfluencers,
  }
}

const mapDispatchToProps = dispatch => ({
  getSuggestedInfluencers: () => dispatch(actions.getSuggestedInfluencers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedInfluencers);
