import {UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY} from '../constants/ActionTypes';

export function updateCurrentNoteTitle(text) {
  	return {type: UPDATE_CURRENT_TITLE, title: text};
}

export function updateCurrentNoteBody(text) {
  	return {type: UPDATE_CURRENT_BODY, body: text};
}
