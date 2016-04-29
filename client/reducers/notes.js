import { SUBMIT_NOTE } from '../constants/ActionTypes';

const initialState = {
  text: "Default state"
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_NOTE:
      return {
        ...state,
        newest: {
          ...action.payload.data.note
        }
      };
    default:
      return state;
  }
}
