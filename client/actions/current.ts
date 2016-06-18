import { SAVE_NOTE, UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes.ts';
import { generateFilename, saveNote } from '../filesystem/saveNote.ts';

/**
 * Redux action to update the current note's title.
 * @param text
 * @returns {{type, title: *}}
 */
export function updateCurrentNoteTitle(text) {
  document.title = text;
  if(text === "" || text === undefined) {
    document.title = "New note..."
  }
  return { type: UPDATE_CURRENT_TITLE, title: text };
}

/**
 * Redux action to update the current note's body.
 * @param text
 * @returns {{type, body: *}}
 */
export function updateCurrentNoteBody(text) {
  return { type: UPDATE_CURRENT_BODY, body: text };
}

export function saveNoteAction(title, body) {
  var note = {
    filename: generateFilename(),
    timestamp: Date.now(),
    title,
    body
  };

  // Save note to the DB
  saveNote(note);

  return {
    type: SAVE_NOTE,
    payload: note
  };
}
