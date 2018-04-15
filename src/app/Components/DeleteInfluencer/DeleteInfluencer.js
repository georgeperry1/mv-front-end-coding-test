import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import './DeleteInfluencer.css';

class DeleteInfluencer extends Component {
  handleClick = () => {
    const { influencer } = this.props;
    this.props.deleteStarredInfluencer(influencer);
  }

  render() {
    return (
      <div
        className="delete-influencer"
        onClick={this.handleClick}
      >
        X
      </div>
    )
  }
}

DeleteInfluencer.propTypes = {
  influencer: PropTypes.object,
  deleteStarredInfluencer: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteStarredInfluencer: (influencer) => dispatch(actions.deleteStarredInfluencer(influencer)),
});

export default connect(null, mapDispatchToProps)(DeleteInfluencer);
