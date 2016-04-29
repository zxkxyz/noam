import { UPDATE_CURRENT_TITLE, UPDATE_CURRENT_BODY } from '../constants/ActionTypes';

const initialState = {
  title: 'Untitled',
  body: ''
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_TITLE:
      return {
        ...state,
        current: {
          ...state.current,
          title: action.title,
        }
      };
    case UPDATE_CURRENT_BODY:
      return {
        ...state,
        current: {
          ...state.current,
          body: action.body
        }
      };
    default:
      return state;
  }
}
