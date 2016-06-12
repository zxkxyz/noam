import { SUBMIT_NOTE } from '../constants/ActionTypes.ts';

const initialState = {
  text: "Default state"
};

export default function notes(state: any = initialState, action: any): any {
  switch (action.type) {
    case SUBMIT_NOTE:
      return Object.assign({}, state, {
        newest: Object.assign({}, action.payload.data.note)
      });
    default:
      return state;
  }
}
