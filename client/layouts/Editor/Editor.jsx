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
        <input
          type="text"
          onChange={this.props.updateTitle}
          placeholder="Untitled">
        </input>
        <br />
        <input
          type="text"
          onChange={this.props.updateBody}>
        </input>
      </div>
    );
  }
}
