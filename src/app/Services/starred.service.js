import * as types from '../Store/actionTypes';
import starredInfluencersData from '../exampleData/starred_influencers';

const starredInfluencersService = store => next => action => {
  if (action.type === types.STARRED_FETCHED) {
    if (starredInfluencersData) {
      const newAction = {
        ...action,
        type: types.STARRED_FETCHED_SUCCESS,
        starredInfluencers: starredInfluencersData,
        isFetching: !action.isFetching,
      }
      const newActionDispatch = () => store.dispatch(newAction);
      // To simulate async API call
      setTimeout(newActionDispatch, 1400);
    } else {
      const newAction = {
        ...action,
        type: types.STARRED_FETCHED_FAILURE
      }
      const newActionDispatch = () => store.dispatch(newAction);
      // To simulate async API call
      setTimeout(newActionDispatch, 1400);
    }
  }
  if (action.type === types.DELETE_STARRED) {
    const newAction = {
      ...action,
      type: types.DELETE_STARRED_SUCCESS,
      starredInfluencers: starredInfluencersData.filter(influencer => influencer !== action.influencer),
      isFetching: !action.isFetching,
    }
    const newActionDispatch = () => store.dispatch(newAction);
    // To simulate async API call
    setTimeout(newActionDispatch, 1200);
  }
  return next(action);
}

export default starredInfluencersService;
