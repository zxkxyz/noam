import React, { Component } from 'react';
import { connect } from "react-redux";

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    );
  }
}

export default NoteList;