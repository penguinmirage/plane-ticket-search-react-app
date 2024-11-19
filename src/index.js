//index.js

import React from 'react';

import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { thunk } from 'redux-thunk';

import App from './components/app';
import reducer from './reducer';

import { Alert } from 'antd';

const container = document.getElementById('root');
const root = createRoot(container);

const OfflineAlert = () => (
  <Alert className="alert-message" message="Не могу подгрузить билеты! Вы оффлайн!" type="warning" />
);

const networkMiddleware = (store) => (next) => (action) => {
  if (!navigator.onLine) {
    if (action.type === 'FETCH_DATA') {
      console.error('Cannot fetch data. You are offline.');
      store.dispatch({ type: 'NETWORK_ERROR', payload: 'You are offline.' });
      return OfflineAlert();
    }
  }

  return next(action);
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   console.log('middleware activated', store.getState());
//   return result;
// };

const store = createStore(reducer, composeEnhancers(applyMiddleware(networkMiddleware, thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
