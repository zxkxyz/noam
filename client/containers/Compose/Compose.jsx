import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Editor from "../../layouts/Editor/Editor.jsx";
import ToolBar from "../../layouts/ToolBar/ToolBar.jsx";
import { updateCurrentNoteTitle, updateCurrentNoteBody } from "../../actions/current";

class Compose extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleTitle({ target }) {
    this.props.updateCurrentNoteTitle(target.value);
    console.log("Title:", target.value);
  }

  handleBody({ target }) {
    this.props.updateCurrentNoteBody(target.value);
    console.log("Body:", target.value);
  }

  render() {
    return (
      <div>
        <Editor
          updateTitle={ :: this.handleTitle }
          updateBody={ :: this.handleBody }/>
        <ToolBar />
      </div>
    );
  }
}

export default connect(
  ({ current }) => ({
    title: current.title,
    body: current.body
  }),
  (dispatch) => bindActionCreators({
    updateCurrentNoteTitle,
    updateCurrentNoteBody
  }, dispatch)
)(Compose);
