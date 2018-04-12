'use strict';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import store from './Store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
