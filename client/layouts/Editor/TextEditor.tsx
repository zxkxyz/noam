import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import AutosizeInput from 'react-input-autosize';

import styles from './TextEditor.css';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      title: ''
    };
  }

  onChangeEditor(editorState) {
    this.setState({ editorState });
    this.props.updateBody(editorState)
  }

  onChangeTitle(titleEvent) {
    this.setState({ title: titleEvent.target.value });
    this.props.updateTitle(titleEvent);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if(newState) {
      this.onChangeEditor(newState);
      return true;
    }
    return false;
  }

  render() {
    let { editorState, title } = this.state;
    return (
      <div className={styles.editorWrapper}>
        <div className={styles.inputWrapper}>
          <AutosizeInput
            className={styles.inputDiv}
            type="text"
            value={title}
            onChange={::this.onChangeTitle}
            placeholder="My Note" />
        </div>
        <br />
        <div className={styles.textEditor}>
          <Editor
            editorState={editorState}
            handleKeyCommand={::this.handleKeyCommand}
            onChange={::this.onChangeEditor}>
          </Editor>
        </div>
      </div>
    );
  }
}