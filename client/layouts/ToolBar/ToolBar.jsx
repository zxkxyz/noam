import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
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
  (dispatch) => bindActionCreators({
    submitNote
  }, dispatch)
)(ToolBar);