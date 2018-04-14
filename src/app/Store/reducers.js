import suggestedInfluencers from './SuggestedReducer';
import starredInfluencers from './StarredReducer';

import * as types from './actionTypes';

const defaultState = {
  isFetching: false,
  suggestedInfluencers: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SUGGESTED_FETCHED:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case types.SUGGESTED_FETCHED_SUCCESS:
      return {
        ...state,
        suggestedInfluencers: action.suggestedInfluencers,
        isFetching: action.isFetching,
      }
    case types.SUGGESTED_FETCHED_FAILURE:
    return {
      ...state,
      isFetching: false,
    }
    default:
      return state;
  }
}
