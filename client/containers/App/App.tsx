import * as React from 'react';
import * as SplitPane from 'react-split-pane';

import Compose from '../Compose/Compose.tsx';
import NoteList from '../NoteList/NoteList.tsx';
import DevTools from '../DevTools.tsx';

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
        {process.env.DEV_TOOLS ? <DevTools /> : null}
      </div>
    );
  }
}

// Add this under the SplitPane component if you want redux dev tools
// <DevTools />
