import { combineReducers } from 'redux';
import notes from './notes';
import current from './current';

const rootReducer =
  combineReducers({
    notes,
    current
  });

export default rootReducer;
