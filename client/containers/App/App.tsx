import * as React from 'react';
import * as SplitPane from 'react-split-pane';

import Compose from '../Compose/Compose.tsx';
import NoteList from '../NoteList/NoteList.tsx';

const styles = require('./App.css');

export default class App extends React.Component<{}, {}> {
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