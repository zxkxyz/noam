import { INITIALIZE_DB_STORE } from '../constants/ActionTypes.ts';
import { SERVER_URL } from '../constants/ServerInfo.ts';

export function updateNoteDb(db) {
  // Initialize the note db store with information from the db file
  console.log("Called update note db action!");
  return {
    type: INITIALIZE_DB_STORE,
    payload: db
  }
}
