import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Editor from '../../components/Editor/Editor.jsx';
import { updateCurrentNoteTitle, updateCurrentNoteBody } from '../../actions/current';

class Compose extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }
  
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
          updateTitle={ ::this.handleTitle } 
          updateBody={ ::this.handleBody } />
      </div>
    );
  }
}

function mapStateToProps({ current }) {
  return { 
    title: current.title, 
    body: current.body 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurrentNoteTitle,
    updateCurrentNoteBody
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose);