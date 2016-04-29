import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools.jsx';

export default function configureStore(initialState) {

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
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
