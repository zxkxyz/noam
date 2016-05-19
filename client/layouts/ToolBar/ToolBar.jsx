import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { submitNote } from "../../actions/notes";

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  postNoteToDatabase() {
    this.props.submitNote(this.props.note);
  }

  render() {
    return (
      <div>
        <button onClick={ :: this.postNoteToDatabase }>Submit</button>
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