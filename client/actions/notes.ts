import axios from 'axios';

import { SUBMIT_NOTE } from '../constants/ActionTypes';
import { SERVER_URL } from '../constants/ServerInfo';

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