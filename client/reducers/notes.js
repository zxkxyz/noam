import { DEFAULT_ACTION } from '../constants/ActionTypes';

const initialState = {
 text: "Default state" 
};

export default function notes(state = initialState, action) {
  switch(action.type) {
    case DEFAULT_ACTION:
      return {
        ...state,
        text: "Updated state!"
      }
    default:
      return state;
  }
};