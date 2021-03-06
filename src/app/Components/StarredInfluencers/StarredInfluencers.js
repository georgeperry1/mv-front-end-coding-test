import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import StarredInfluencersList from '../StarredInfluencersList';
import SortingControl from '../SortingControl';
import Loader from '../Loader';

import './StarredInfluencers.css';

class StarredInfluencers extends Component {

  componentWillMount() {
    this.props.getStarredInfluencers();
  }

  renderLoading() {
    return (
      <Loader />
    )
  }

  renderStarredInfluencers() {
    const { starredInfluencers } = this.props;
    if (!starredInfluencers.length) {
      return <p>No influencers available</p>;
    }
    return (
      <StarredInfluencersList starred={starredInfluencers}/>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="starred-container">
        <div className="starred-top">
          <h5 className="starred-header">Starred Influencers</h5>
          <SortingControl />
        </div>
        <div>
          {isFetching ? (
            <div>
              {this.renderLoading()}
            </div>
          ) : (
            <div>
              {this.renderStarredInfluencers()}
            </div>
          )}
        </div>
      </div>
    )
  }
}

StarredInfluencers.propTypes = {
  isFetching: PropTypes.bool,
  getStarredInfluencers: PropTypes.func,
  starredInfluencers: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    starredInfluencers: state.starredInfluencers,
  }
}

const mapDispatchToProps = dispatch => ({
  getStarredInfluencers: () => dispatch(actions.getStarredInfluencers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarredInfluencers);
