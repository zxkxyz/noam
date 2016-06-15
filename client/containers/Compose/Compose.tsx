import * as React from "react";
import { connect } from "react-redux";
import TextEditor from "../../layouts/Editor/TextEditor.tsx";
import ToolBar from "../../layouts/ToolBar/ToolBar.tsx";
import { updateCurrentNoteTitle, updateCurrentNoteBody } from "../../actions/current.ts";
import { EditorState } from 'draft-js';

const styles = require('./Compose.css');

export interface ComposeProps {
  title: string,
  body: EditorState,
  updateCurrentNoteTitle: (any) => any,
  updateCurrentNoteBody: (any) => any
}

class Compose extends React.Component<ComposeProps, {}> {
  constructor(props) {
    super(props);

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  handleTitle({ target }) {
    this.props.updateCurrentNoteTitle(target.value);
    // console.log("Title:", target.value);
  }

  handleBody(editorState) {
    this.props.updateCurrentNoteBody(editorState);
    // console.log("Body State:", editorState);
  }

  render() {
    return (
      <div className={styles.Compose}>
        <TextEditor
          updateTitle={ this.handleTitle }
          updateBody={ this.handleBody }/>
        <ToolBar />
      </div>
    );
  }
}

export default connect(
  ({ current }) => ({
    title: current.title,
    body: current.body
  }),
  {
    updateCurrentNoteTitle,
    updateCurrentNoteBody
  }
)(Compose);
