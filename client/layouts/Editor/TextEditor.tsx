import * as React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
const AutosizeInput = require('react-input-autosize');

const styles = require('./TextEditor.css');

export interface TextEditorProps {
  updateBody: (any) => any,
  updateTitle: (any) => any,
};

export interface TextEditorState {
  editorState: EditorState,
  title: string
};

export default class TextEditor extends React.Component<TextEditorProps, TextEditorState> {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      title: ''
    };

    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  onChangeEditor(editorState) {
    this.setState({ editorState } as TextEditorState);
    this.props.updateBody(editorState)
  }

  onChangeTitle(titleEvent) {
    this.setState({ title: titleEvent.target.value } as TextEditorState);
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
            onChange={this.onChangeTitle}
            placeholder="My Note" />
        </div>
        <br />
        <div className={styles.textEditor}>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChangeEditor}>
          </Editor>
        </div>
      </div>
    );
  }
}