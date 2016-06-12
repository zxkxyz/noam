require('core-js');
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App.tsx';
import configureStore from './store/configureStore.ts';

const store = configureStore({});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
