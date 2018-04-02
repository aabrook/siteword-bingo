import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './Actions/selectWords'
import words from './lib/words'

const store = createStore(actions, {
  selectedWords: [],
  availableWords: words(),
  activeWords: [],
  words: []
})

const App_ = connect()(App)

render(
  <Provider store={store}>
    <App_ />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
