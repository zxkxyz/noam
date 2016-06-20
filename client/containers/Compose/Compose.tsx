// Dependencies:
import * as React from "react";
import { connect } from "react-redux";
import { EditorState } from 'draft-js';
import { debounce } from 'lodash';

// Layouts:
import TextEditor from "../../layouts/Editor/TextEditor.tsx";
import ToolBar from "../../layouts/ToolBar/ToolBar.tsx";

// Actions:
import { updateCurrentNoteTitle, updateCurrentNoteBody } from "../../actions/current.ts";
import { saveNoteAction } from "../../actions/current.ts";

// Serializing and Saving functions:
import { noteToRaw } from "../../filesystem/serialize.ts";

// Styles:
const styles = require("./Compose.css");

export interface ComposeProps {
  title: string,
  body: EditorState,
  updateCurrentNoteTitle: (any) => any,
  updateCurrentNoteBody: (any) => any,
  saveNoteAction: (string, any, name) => any
}

class Compose extends React.Component<ComposeProps, {}> {
  constructor(props) {
    super(props);

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.saveNoteToFS = this.saveNoteToFS.bind(this);
  }

  handleTitle(title) {
    this.props.updateCurrentNoteTitle(title);
  }

  handleBody(editorState) {
    this.props.updateCurrentNoteBody(editorState);
  }

  saveNoteToFS() {
    var serializedNote = noteToRaw(this.props.body);
    this.props.saveNoteAction(this.props.title, serializedNote, this.props.filename);
  }

  render() {
    return (
      <div className={styles.Compose}>
        <TextEditor
          updateTitle={ this.handleTitle }
          updateBody={ this.handleBody }
          title={ this.props.title }
          body={ this.props.body } />
        <ToolBar
          saveNoteToFS={this.saveNoteToFS} />
      </div>
    );
  }
}

export default connect(
  // Map state to props
  ({ current }) => ({
    title: current.title,
    body: current.body,
    filename: current.filename
  }),
  // Map dispatch actions to props
  {
    updateCurrentNoteTitle,
    updateCurrentNoteBody,
    saveNoteAction
  }
)(Compose);
