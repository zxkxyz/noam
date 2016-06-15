import * as React from "react";
import { connect } from "react-redux";
import { saveNote } from "../../filesystem/saveNote.ts";

const styles = require('./ToolBar.css');

export interface ToolBarProps {
  saveNote: (any) => any,
  note: any
};

class ToolBar extends React.Component<ToolBarProps, {}> {
  constructor(props) {
    super(props);

    this.saveNoteLocally = this.saveNoteLocally.bind(this);
  }

  saveNoteLocally() {
    this.props.saveNote(this.props.note);
  }

  render() {
    return (
      <div className={styles.ToolBar}>
        <button onClick={ this.saveNoteLocally }>Submit Note</button>
      </div>
    )
  }
}

export default connect(
  ({ current }) => ({
    note: current
  }),
  {
    saveNote
  }
)(ToolBar);