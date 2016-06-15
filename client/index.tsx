require('core-js');
import * as React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.ts';
import { Provider } from 'react-redux';
import App from './containers/App/App.tsx';
const { AppContainer } = require('react-hot-loader');

const store = configureStore({});

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if((module as any).hot) {
  (module as any).hot.accept('./containers/App/App.tsx', () => {
    const NextApp = require('./containers/App/App.tsx').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}