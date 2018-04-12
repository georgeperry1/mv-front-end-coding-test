import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger();
const middlewares = applyMiddleware(logger);
const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;
