import * as axios from 'axios';

import { SUBMIT_NOTE } from '../constants/ActionTypes.ts';
import { SERVER_URL } from '../constants/ServerInfo.ts';

/**
 * Submits note to the database
 * @param note
 * @returns {{type, payload: axios.Promise}}
 */
export function submitNote(note) {
  const request = axios.post(`${SERVER_URL}/api/notes/submit`, {
    note
  });

  return {
    type: SUBMIT_NOTE,
    payload: request
  }
}