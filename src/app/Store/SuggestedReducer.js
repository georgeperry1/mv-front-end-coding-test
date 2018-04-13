import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const defaultState = Immutable({
  suggestedInfluencers: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SUGGESTED_FETCHED:
      return state;
    case types.SUGGESTED_FETCHED_SUCCESS:
      return state.merge({
        suggestedInfluencers: action.suggestedInfluencers
      });
    case types.SUGGESTED_FETCHED_FAILURE:
      return state;
    default:
      return state;
  }
}
