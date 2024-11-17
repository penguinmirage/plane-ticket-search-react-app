//app.js

import React from 'react';

import { createRoot } from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
