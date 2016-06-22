import * as React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
const AutosizeInput = require('react-input-autosize');

const styles = require('./TextEditor.css');

export interface TextEditorProps {
  updateBody: (any) => any,
  updateTitle: (any) => any,
  title: string,
  body: EditorState
};

export default class TextEditor extends React.Component<TextEditorProps, {}> {
  constructor(props) {
    super(props);

    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  onChangeEditor(editorState) {
    this.props.updateBody(editorState)
  }

  onChangeTitle(titleEvent) {
    this.props.updateTitle(titleEvent.target.value);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.props.body, command);
    if(newState) {
      this.onChangeEditor(newState);
      return true;
    }
    return false;
  }

  render() {
    let { body, title } = this.props;
    return (
      <div className={styles.editorWrapper}>
        <div className={styles.inputWrapper}>
          <AutosizeInput
            className={styles.inputDiv}
            type="text"
            value={title}
            onChange={this.onChangeTitle}
            placeholder="My Note" />
        </div>
        <br />
        <div className={styles.textEditor}>
          <Editor
            editorState={body}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChangeEditor}>
          </Editor>
        </div>
      </div>
    );
  }
}
