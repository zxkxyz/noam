import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TextEditor from "../../layouts/Editor/TextEditor.jsx";
import ToolBar from "../../layouts/ToolBar/ToolBar.jsx";
import { updateCurrentNoteTitle, updateCurrentNoteBody } from "../../actions/current";
import { EditorState } from 'draft-js';

import styles from './Compose.css';

class Compose extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.instanceOf(EditorState)
  };

  constructor(props) {
    super(props);
  }

  handleTitle({ target }) {
    this.props.updateCurrentNoteTitle(target.value);
    console.log("Title:", target.value);
  }

  handleBody(editorState) {
    this.props.updateCurrentNoteBody(editorState);
    console.log("Body State:", editorState);
  }

  render() {
    return (
      <div className={styles.Compose}>
        <TextEditor
          updateTitle={ :: this.handleTitle }
          updateBody={ :: this.handleBody }/>
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
