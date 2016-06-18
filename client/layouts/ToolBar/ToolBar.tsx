import * as React from "react";
import { connect } from "react-redux";

const styles = require('./ToolBar.css');

export interface ToolBarProps {
  saveNoteToFS: () => any
};

class ToolBar extends React.Component<ToolBarProps, {}> {
  constructor(props) {
    super(props);

    this.saveNoteLocally = this.saveNoteLocally.bind(this);
  }

  saveNoteLocally() {
    this.props.saveNoteToFS();
  }

  render() {
    return (
      <div className={styles.ToolBar}>
        <button onClick={ this.saveNoteLocally }>Save</button>
      </div>
    )
  }
}

export default ToolBar;
