import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <h3>Editor:</h3>
        <textarea type="text">
        </textarea>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Editor);