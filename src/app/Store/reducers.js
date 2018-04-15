import * as types from './actionTypes';

const defaultState = {
  isFetching: false,
  suggestedInfluencers: [],
  starredInfluencers: [],
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
    case types.ADD_SUGGESTED:
      return {
        ...state,
        isFetching: true,
      }
    case types.ADD_SUGGESTED_SUCCESS:
      return {
        ...state,
        suggestedInfluencers: action.suggestedInfluencers,
        starredInfluencers: [
          ...state.starredInfluencers,
          action.influencer,
        ],
        isFetching: false,
      }
    case types.ADD_SUGGESTED_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state;
  }
}
