import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

export function noteToRaw(editorState) {
  // console.log("editorState", editorState);
  const contentState = editorState.getCurrentContent();
  // console.log("contentState", contentState);
  const rawState = convertToRaw(contentState);
  // console.log("rawState", rawState);
  return rawState;
}

export function rawToNote(raw) {
  const contentState = convertFromRaw(raw);
  const editorState = EditorState.createWithContent(contentState as any);
  return editorState;
}
