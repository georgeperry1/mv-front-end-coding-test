import * as types from './actionTypes';

export const getSuggestedInfluencers = () => {
  return {
    type: types.SUGGESTED_FETCHED,
    isFetching: true,
  }
};
