export function saveNote({title, body}) {
  console.log("title", title);
  console.log("editorState", body.getCurrentContent());
}