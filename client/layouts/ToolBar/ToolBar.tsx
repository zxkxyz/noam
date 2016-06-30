import * as React from "react";
import { connect } from "react-redux";

const styles = require('./ToolBar.css');

export interface ToolBarProps {
  onBoldClick: () => void,
  onItalicClick: () => void,
  onUnderlineClick: () => void
};

class ToolBar extends React.Component<ToolBarProps, {}> {
  constructor(props) {
    super(props);
  }

  /*
    <button onClick={ this.saveNoteLocally }>
      <span>Save</span>
    </button>
  */

  render() {
    return (
      <div className={styles.ToolBar}>
        <button onClick={this.props.onBoldClick}>
          <span className={styles.BoldButton}>B</span>
        </button>
        <button onClick={this.props.onItalicClick}>
          <span className={styles.ItalicButton}>I</span>
        </button>
        <button onClick={this.props.onUnderlineClick}>
          <span className={styles.UnderlineButton}>U</span>
        </button>
      </div>
    )
  }
}

export default ToolBar;
