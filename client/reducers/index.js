import {combineReducers} from 'redux';
import notes from './notes.js';
import current from './current.js';

const rootReducer = combineReducers({
  	notes,
  	current
});

export default rootReducer;
