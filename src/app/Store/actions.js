import * as types from './actionTypes';

export const getSuggestedInfluencers = (suggestedInfluencers) => {
  return {
    type: types.SUGGESTED_FETCHED,
  }
};
