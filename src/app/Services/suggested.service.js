import * as types from '../Store/actionTypes';
import suggestedInfluencersData from '../exampleData/suggested_influencers';

const suggestedInfluencersService = store => next => action => {
  if (action.type === types.SUGGESTED_FETCHED) {
    if (suggestedInfluencersData) {
      const newAction = {
        ...action,
        type: types.SUGGESTED_FETCHED_SUCCESS,
        suggestedInfluencers: suggestedInfluencersData,
        isFetching: !action.isFetching,
      }
      const newActionDispatch = () => store.dispatch(newAction);
      // To simulate async API call
      setTimeout(newActionDispatch, 1200);
    } else {
      const newAction = {
        ...action,
        type: types.SUGGESTED_FETCHED_FAILURE
      }
      const newActionDispatch = () => store.dispatch(newAction);
      // To simulate async API call
      setTimeout(newActionDispatch, 1200);
    }
  }
  if (action.type === types.ADD_SUGGESTED) {
    const newAction = {
      ...action,
      type: types.ADD_SUGGESTED_SUCCESS,
      suggestedInfluencers: suggestedInfluencersData.filter(influencer => influencer !== action.influencer),
      isFetching: !action.isFetching,
    }
    const newActionDispatch = () => store.dispatch(newAction);
    // To simulate async API call
    setTimeout(newActionDispatch, 1200);
  }
  return next(action);
}

export default suggestedInfluencersService;
