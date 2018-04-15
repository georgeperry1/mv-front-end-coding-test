import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions';

import './AddInfluencer.css';

class AddInfluencer extends Component {
  handleClick = () => {
    const { influencer } = this.props;
    this.props.addSuggestedInfluencer(influencer);
  }

  render() {
    return (
      <div
        className="add-influencer"
        onClick={this.handleClick}
      >
        +
      </div>
    )
  }
}

AddInfluencer.propTypes = {
  influencer: PropTypes.object,
  addSuggestedInfluencer: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addSuggestedInfluencer: (influencer) => dispatch(actions.addSuggestedInfluencer(influencer)),
});

export default connect(null, mapDispatchToProps)(AddInfluencer);
