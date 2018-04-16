import * as types from './actionTypes';

export const getSuggestedInfluencers = () => {
  return {
    type: types.SUGGESTED_FETCHED,
    isFetching: true,
  }
};

export const getStarredInfluencers = () => {
  return {
    type: types.STARRED_FETCHED,
    isFetching: true,
  }
};

export const addSuggestedInfluencer = (influencer) => {
  return {
    type: types.ADD_SUGGESTED,
    influencer,
  }
};

export const deleteStarredInfluencer = (influencer) => {
  return {
    type: types.DELETE_STARRED,
    influencer,
  }
};

export const sortInfluencers = (order, starredInfluencers) => {
  return {
    type: types.CHANGE_ORDER,
    order,
    starredInfluencers,
  }
};
