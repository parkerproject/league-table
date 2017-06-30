/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const middleWare = [logger];
const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
const store = createStoreWithMiddleware(reducers);

// createStoreWithMiddleware(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.league_table'));
registerServiceWorker();
