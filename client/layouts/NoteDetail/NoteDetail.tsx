import * as React from 'react';

const styles = require('./NoteDetail.css');

export interface NoteDetailProps {
  title: any,
  body: any,
  timestamp: any,
  key: any,
  filename: any,
  loadNote: any
}

class NoteDetail extends React.Component<NoteDetailProps, {}> {
  constructor(props) {
    super(props);

    this.loadNote = this.loadNote.bind(this);
  }

  loadNote() {
    this.props.loadNote(this.props.filename);
  }

  render() {
    return (
      <li className={styles.li} onClick={this.loadNote}>
        <span className={styles.title}>{this.props.title}</span>
        <span className={styles.body}> {this.props.body}</span>
      </li>
    );
  }
}

export default NoteDetail;
