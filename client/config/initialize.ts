import { verifyMetaFile, verifyAppFolder, verifyDatabaseFile, getNoteDatabase } from '../filesystem/saveNote.ts';
import { store } from "../index.tsx";
import { updateNoteDb } from '../actions/notes.ts';

// Verify that the directory, meta file and database file exists
// These functions are syncronous because we need to ensure these files exist before continuing
verifyAppFolder();
verifyDatabaseFile();
verifyMetaFile();

getNoteDatabase()
.then((db) => {
  store.dispatch(updateNoteDb(db));
});
