import * as types from '../Store/actionTypes';
import suggestedInfluencersData from '../exampleData/suggested_influencers';

const suggestedInfluencersService = store => next => action => {
  if (action.type === types.SUGGESTED_FETCHED) {
    if (suggestedInfluencersData) {
      let newAction = {
        ...action,
        type: types.SUGGESTED_FETCHED_SUCCESS,
        suggestedInfluencers: suggestedInfluencersData,
      }
      store.dispatch(newAction);
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
