import { createStore, compose, applyMiddleware } from 'redux';
import createLogger = require('redux-logger');
const promise = require('redux-promise');
import rootReducer from '../reducers/index.ts';
import DevTools from '../containers/DevTools.tsx';

export default function configureStore(initialState: any): any{

  // Create redux logger
  const logger = createLogger({
    level: 'info',
    collapsed: true,
    // For transforming Symbols into Strings
    actionTransformer: (action) => Object.assign({}, action, {
      type: action.type.toString()
    })
  });

  // Create the Redux store
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(promise, logger),
      DevTools.instrument()
    )
  );

  // Logic for HMR
  if ((module as any).hot) {
    (module as any).hot.accept('../reducers/index.ts', () => {
      const nextReducer = require('../reducers/index.ts').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
