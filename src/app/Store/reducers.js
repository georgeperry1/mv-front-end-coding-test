import { combineReducers } from 'redux';

import suggest from './SuggestedReducer';
import starred from './StarredReducer';

export default combineReducers({
  suggest,
  starred,
});
