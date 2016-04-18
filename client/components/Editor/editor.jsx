import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Editor extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <h3>Editor:</h3>
        <input type="text">
        </input>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);