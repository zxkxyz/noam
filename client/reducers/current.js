import { UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes';
import { EditorState } from 'draft-js';

const initialState = {
  title: 'Untitled',
  body: EditorState.createEmpty()
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case UPDATE_CURRENT_BODY:
      return {
        ...state,
        body: action.body
      };
    default:
      return state;
  }
}
