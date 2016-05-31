import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { submitNote } from "../../actions/notes";

import styles from './ToolBar.css';

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  postNoteToDatabase() {
    this.props.submitNote(this.props.note);
  }

  doSomeFsThings() {
    fs.writeFile('Users/zgolding/Downloads/something.txt', function(err) {
      console.log("error with fs:", err);
    });
  }

  render() {
    return (
      <div className={styles.ToolBar}>
        <button onClick={ ::this.postNoteToDatabase }>Submit</button>
        <button onClick={ ::this.doSomeFsThings }></button>
      </div>
    )
  }
}

export default connect(
  ({ current }) => ({
    note: current
  }),
  {
    submitNote
  }
)(ToolBar);