import { INITIALIZE_DB_STORE, UPDATE_FILTER } from '../constants/ActionTypes.ts';

export function updateNoteDb(db) {
  // Initialize the note db store with information from the db file
  return {
    type: INITIALIZE_DB_STORE,
    payload: db
  }
}

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    filter
  }
}
