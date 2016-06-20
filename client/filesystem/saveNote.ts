import { PATH } from '../constants/PathInfo.ts';
import * as path from 'path';
const { v4 } = require('uuid');
const fs = require('fs-extra');

function dirHelper(filename) {
  return path.join(PATH, filename);
}

export function generateFilename() {
  return v4();
}

export function saveNote({ filename, title, body, timestamp }) {
  getNoteDatabase()
  .then((db) => {
    db.notes[filename] = { title, body, timestamp, filename };
    return saveNoteDatabase(db);
  })
  .then(() => {
    console.log("Updated note database!");
  });
}

export function verifyMetaFile() {
  let dir = dirHelper(".meta");
  try {
    fs.ensureFileSync(dir);
    let contents = fs.readJsonSync(dir, {throws: false});
    if(!contents) {
      fs.writeJsonSync(dir, { settings: {} });
      console.log("Initialized meta file")
    } else {
      console.log("Meta file already exists!");
    }
  } catch (err) {
    console.error("Meta file error:", err);
  }
}

export function verifyDatabaseFile() {
  let dir = dirHelper("notes.noam");
  try {
    fs.ensureFileSync(dir);
    let contents = fs.readJsonSync(dir, {throws: false});
    if(!contents) {
      fs.writeJsonSync(dir, { notes: {} });
      console.log("Initialied note database!");
    } else {
      console.log("Note database already exists!");
    }
  } catch (err) {
    console.error("Note database error:", err);
  }
}

export function verifyAppFolder() {
  fs.ensureDirSync(PATH, (err) => {
    if (err) throw (err);
    console.log("Verified note folder!");
  });
}

export function saveNoteDatabase(newData) {
  console.log("newdata", newData);
  return new Promise((resolve, reject) => {
    fs.outputJson(dirHelper("notes.noam"), newData, function(err) {
      if (err) reject(err);
      resolve();
    });
  });
}

export function backupNoteDatabase() {

}

export function getNoteDatabase() {
  return new Promise((resolve, reject) => {
    fs.readJson(dirHelper("notes.noam"), function(err, obj) {
      if (err) reject(err);
      resolve(obj);
    });
  });
}
