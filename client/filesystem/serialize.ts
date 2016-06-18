import { convertToRaw } from 'draft-js';

export function noteToRaw(editorState) {
  // console.log("editorState", editorState);
  const contentState = editorState.getCurrentContent();
  // console.log("contentState", contentState);
  const rawState = convertToRaw(contentState);
  // console.log("rawState", rawState);
  return rawState;
}

export function rawToNote(jsObject) {
  return "hello";
}
