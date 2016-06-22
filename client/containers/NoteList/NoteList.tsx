import * as React from 'react';
import { connect } from 'react-redux';
import { loadNote } from '../../actions/current.ts';
import NoteDetail from '../../layouts/NoteDetail/NoteDetail.tsx';

const styles = require('./NoteList.css');

export interface NoteListProps {
  notes: any,
  loadNote: (any) => any
}

class NoteList extends React.Component<NoteListProps, {}> {
  constructor(props) {
    super(props);

    this.loadNote = this.loadNote.bind(this);
    this.generateNoteDetails = this.generateNoteDetails.bind(this);
  }

  loadNote(id) {
    this.props.loadNote(this.props.notes[id]);
  }

  generateNoteDetails() {
    var noteDetails = [];
    if(Object.keys(this.props.notes).length) {
      for(let key in this.props.notes) {
        let item = this.props.notes[key];
        noteDetails.push(
          <NoteDetail
            key={item.filename}
            title={item.title}
            body={item.body.blocks[0].text}
            timestamp={item.timestamp}
            filename={item.filename}
            loadNote={this.loadNote} />
        );
      }
    }
    return noteDetails.sort((a, b) => a.props.timestamp < b.props.timestamp ? 1 : -1);
  }

  render() {
    return (
      <div className={styles.list}>
        <ul>
          {this.generateNoteDetails()}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ notes }) => ({
    notes: notes.notes
  }), {
    loadNote
  }
)(NoteList);
