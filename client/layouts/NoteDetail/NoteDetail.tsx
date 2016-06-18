import * as React from 'react';

const styles = require('./NoteDetail.css');

export interface NoteDetailProps {
  title: any,
  body: any,
  timestamp: any
}

class NoteDetail extends React.Component<NoteDetailProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={styles.li}>
        <span className={styles.title}>{this.props.title}</span>
        <span className={styles.body}> {this.props.body}</span>
      </li>
    );
  }
}

export default NoteDetail;
