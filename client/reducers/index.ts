import { combineReducers } from 'redux';
import notes from './notes.ts';
import current from './current.ts';

export default combineReducers({
  notes,
  current
});