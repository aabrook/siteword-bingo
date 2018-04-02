import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {createLogger} from 'redux-logger'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './Actions/selectWords'
import words from './lib/words'

const loggerMiddleware = createLogger()

const store = createStore(actions, {
  selectedWords: [],
  availableWords: words(),
  activeWords: [],
  words: []
}, applyMiddleware(loggerMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
