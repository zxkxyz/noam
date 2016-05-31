import React, {Component} from 'react';
import SplitPane from 'react-split-pane';

import Compose from '../Compose/Compose.jsx';
import NoteList from '../NoteList/NoteList.jsx';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <SplitPane
          split="horizontal"
          defaultSize={280} >
          <NoteList />
          <Compose />
        </SplitPane>
      </div>
    );
  }
}