import { LOAD_NOTE, UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY, UPDATE_CURRENT_FILENAME } from '../constants/ActionTypes.ts';
import { EditorState } from 'draft-js';

const initialState = {
  title: 'Untitled',
  body: EditorState.createEmpty(),
  filename: null
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      });
    case UPDATE_CURRENT_BODY:
      return Object.assign({}, state, {
        body: action.body
      });
    case UPDATE_CURRENT_FILENAME:
      return Object.assign({}, state, {
        filename: action.filename
      });
    case LOAD_NOTE:
      return Object.assign({}, state, {
        title: action.payload.title,
        body: action.payload.body,
        filename: action.payload.filename
      });
    default:
      return state;
  }
}
