import { UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes.ts';

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
