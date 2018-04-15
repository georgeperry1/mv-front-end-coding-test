import * as types from './actionTypes';

export const getSuggestedInfluencers = () => {
  return {
    type: types.SUGGESTED_FETCHED,
    isFetching: true,
  }
};

export const addSuggestedInfluencer = (influencer) => {
  return {
    type: types.ADD_SUGGESTED,
    influencer: influencer,
  }
};
