import * as React from 'react';

class NoteList extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  displayNotesList() {

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