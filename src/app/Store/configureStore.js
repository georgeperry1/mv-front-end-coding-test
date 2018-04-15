import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import suggestedInfluencersService from '../Services/suggested.service';
import starredInfluencersService from '../Services/starred.service';

const logger = createLogger();
const middlewares = applyMiddleware(logger, thunk, suggestedInfluencersService, starredInfluencersService);
const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;
