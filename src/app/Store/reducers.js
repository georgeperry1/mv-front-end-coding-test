import { combineReducers } from 'redux';

import suggestedInfluencers from './SuggestedReducer';
import starredInfluencers from './StarredReducer';

export default combineReducers({
  suggestedInfluencers,
  starredInfluencers,
});
