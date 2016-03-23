import '../styles/main.scss';

// boilerplate imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleare = applyMiddleware(ReduxPromise)(createStore);

// Must refactor once using redux

ReactDOM.render(
  <Provider store={createStoreWithMiddleare(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
