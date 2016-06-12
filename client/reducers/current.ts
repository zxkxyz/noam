import { UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes.ts';
import { EditorState } from 'draft-js';

const initialState = {
  title: 'Untitled',
  body: EditorState.createEmpty()
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
    default:
      return state;
  }
}
