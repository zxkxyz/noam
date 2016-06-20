import { SAVE_NOTE, LOAD_NOTE, UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes.ts';
import { generateFilename, saveNote } from '../filesystem/saveNote.ts';
import { rawToNote } from '../filesystem/serialize.ts';

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
export function updateCurrentNoteBody(editorState) {
  return { type: UPDATE_CURRENT_BODY, body: editorState };
}

export function saveNoteAction(title, body, filename) {
  var note = {
    filename: filename || generateFilename(),
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

export function loadNote(note) {
  var modified = Object.assign({}, note, { body: rawToNote(note.body) });
  return {
    type: LOAD_NOTE,
    payload: modified
  }
}
