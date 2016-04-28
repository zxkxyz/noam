import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools.jsx';

export default function configureStore(initialState) {

  const logger = createLogger({
    level: 'info',
    collapsed: true,
    actionTransformer: (action) => Object.assign({}, action, {
      type: action.type.toString()
    })
  });

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
