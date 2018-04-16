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
  if (action.type === types.CHANGE_ORDER) {
    let newAction;
    switch (action.order) {
      case 'Name (A - Z)':
        newAction = {
          ...action,
          type: types.NAME_A_TO_Z,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            if (a.influencer_full_name < z.influencer_full_name) return -1;
            if (a.influencer_full_name > z.influencer_full_name) return 1;
            return 0;
          }),
        }
        store.dispatch(newAction);
        break;
      case 'Name (Z - A)':
        newAction = {
          ...action,
          type: types.NAME_Z_TO_A,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            if (z.influencer_full_name < a.influencer_full_name) return -1;
            if (z.influencer_full_name > a.influencer_full_name) return 1;
            return 0;
          }),
        }
        store.dispatch(newAction);
        break;
      case 'Followers (High - Low)':
        newAction = {
          ...action,
          type: types.FOLLOWERS_HIGH_TO_LOW,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            return z.statistics.followers - a.statistics.followers;
          }),
        }
        store.dispatch(newAction);
        break;
      case 'Followers (Low - High)':
        newAction = {
          ...action,
          type: types.FOLLOWERS_LOW_TO_HIGH,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            return a.statistics.followers - z.statistics.followers;
          }),
        }
        store.dispatch(newAction);
        break;
      case 'Engagement (High - Low)':
        newAction = {
          ...action,
          type: types.ENGAGEMENT_HIGH_TO_LOW,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            return z.statistics.engagement - a.statistics.engagement;
          }),
        }
        store.dispatch(newAction);
        break;
      case 'Engagement (Low - High)':
        newAction = {
          ...action,
          type: types.ENGAGEMENT_LOW_TO_HIGH,
          starredInfluencers: [...action.starredInfluencers].sort((a, z) => {
            return a.statistics.engagement - z.statistics.engagement;
          }),
        }
        store.dispatch(newAction);
        break;
      default:
      newAction = {
        ...action,
        type: types.DEFAULT_ORDER,
      }
      store.dispatch(newAction);
    }
  }
  return next(action);
}

export default starredInfluencersService;
