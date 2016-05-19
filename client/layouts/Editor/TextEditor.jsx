import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import styles from './TextEditor.css';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
  }

  onChangeEditor(editorState) {
    console.log("editorState", editorState);
    this.setState({editorState});
    this.props.updateBody(editorState)
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.props.updateTitle}
          placeholder="Untitled">
        </input>
        <br />
        <div className={styles.textEditor}>
          <Editor
            editorState={editorState}
            onChange={::this.onChangeEditor}>
          </Editor>
        </div>
      </div>
    );
  }
}