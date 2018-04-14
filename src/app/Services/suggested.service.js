import * as types from '../Store/actionTypes';
import suggestedInfluencersData from '../exampleData/suggested_influencers';

const suggestedInfluencersService = store => next => action => {
  if (action.type === types.SUGGESTED_FETCHED) {
    if (suggestedInfluencersData) {
      let newAction = {
        ...action,
        type: types.SUGGESTED_FETCHED_SUCCESS,
        suggestedInfluencers: suggestedInfluencersData,
        isFetching: !action.isFetching,
      }
      const newActionDispatch = () => store.dispatch(newAction);
      // To simulate async API call
      setTimeout(newActionDispatch, 2000);
    } else {
      let newAction = {
        ...action,
        type: types.SUGGESTED_FETCHED_FAILURE
      }
      store.dispatch(newAction);
    }
  }
  return next(action)
}

export default suggestedInfluencersService;
