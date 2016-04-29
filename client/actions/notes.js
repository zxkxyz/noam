import axios from 'axios';

import { SUBMIT_NOTE } from '../constants/ActionTypes';
import { SERVER_URL } from '../constants/ServerInfo';

export function submitNote(note) {
  const request = axios.post(`${SERVER_URL}/api/notes/submit`, {
    note
  });

  return {
    type: SUBMIT_NOTE,
    payload: request
  }
}