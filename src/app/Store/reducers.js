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
    case types.STARRED_FETCHED:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case types.STARRED_FETCHED_SUCCESS:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
        isFetching: action.isFetching,
      }
    case types.STARRED_FETCHED_FAILURE:
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
    case types.DELETE_STARRED:
      return {
        ...state,
        isFetching: true,
      }
    case types.DELETE_STARRED_SUCCESS:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
        isFetching: false,
      }
    case types.DELETE_STARRED_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.NAME_A_TO_Z:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.NAME_Z_TO_A:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.FOLLOWERS_HIGH_TO_LOW:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.FOLLOWERS_LOW_TO_HIGH:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.ENGAGEMENT_HIGH_TO_LOW:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.ENGAGEMENT_LOW_TO_HIGH:
      return {
        ...state,
        starredInfluencers: action.starredInfluencers,
      }
    case types.DEFAULT_ORDER:
      return state;
    default:
      return state;
  }
}
