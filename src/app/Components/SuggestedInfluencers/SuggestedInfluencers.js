import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import SuggestedInfluencersList from '../SuggestedInfluencersList';
import Loader from '../Loader';

import './SuggestedInfluencers.css';

class SuggestedInfluencers extends Component {

  componentWillMount() {
    this.props.getSuggestedInfluencers();
  }

  renderLoading() {
    return (
      <Loader />
    )
  }

  renderSuggestedInfluencers() {
    const { suggestedInfluencers } = this.props;
    if (!suggestedInfluencers.length) {
      return <h6>No influencers available</h6>;
    }
    return (
      <SuggestedInfluencersList suggested={suggestedInfluencers}/>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="suggested-container">
        <h5 className="suggested-header">Suggested Influencers</h5>
        <div>
          {isFetching ? (
            <div>
              {this.renderLoading()}
            </div>
          ) : (
            <div>
              {this.renderSuggestedInfluencers()}
            </div>
          )}
        </div>
      </div>
    )
  }
}

SuggestedInfluencers.propTypes = {
  isFetching: PropTypes.bool,
  getSuggestedInfluencers: PropTypes.func,
  suggestedInfluencers: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    suggestedInfluencers: state.suggestedInfluencers,
  }
}

const mapDispatchToProps = dispatch => ({
  getSuggestedInfluencers: () => dispatch(actions.getSuggestedInfluencers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedInfluencers);
