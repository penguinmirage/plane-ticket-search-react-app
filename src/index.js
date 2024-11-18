//index.js

import React from 'react';

import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { thunk } from 'redux-thunk';

import App from './components/app';
import reducer from './reducer';

const container = document.getElementById('root');
const root = createRoot(container);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('middleware activated', store.getState());
  return result;
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
