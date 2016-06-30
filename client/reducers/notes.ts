import { SAVE_NOTE, INITIALIZE_DB_STORE, UPDATE_FILTER } from '../constants/ActionTypes.ts';

const initialState = { notes: {}, filter: '' };

export default function notes(state: any = initialState, action: any): any {
  switch (action.type) {
    case SAVE_NOTE:
      return Object.assign({}, state, {
        notes: Object.assign({}, state.notes, {
          [action.payload.filename]: {
            title: action.payload.title,
            body: action.payload.body,
            timestamp: action.payload.timestamp,
            filename: action.payload.filename
          }
        })
      });
    case INITIALIZE_DB_STORE:
      return Object.assign({}, state, action.payload);
    case UPDATE_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    default:
      return state;
  }
}
