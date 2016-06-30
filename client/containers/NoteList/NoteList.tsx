import * as React from 'react';
import { connect } from 'react-redux';
import { loadNote } from '../../actions/current.ts';
import { updateFilter } from '../../actions/notes.ts';
import NoteDetail from '../../layouts/NoteDetail/NoteDetail.tsx';
import SearchBar from '../../layouts/SearchBar/SearchBar.tsx';

const styles = require('./NoteList.css');

export interface NoteListProps {
  notes: any,
  filter: string,
  loadNote: (any) => void,
  updateFilter: (string) => void
}

class NoteList extends React.Component<NoteListProps, {}> {
  constructor(props) {
    super(props);

    this.loadNote = this.loadNote.bind(this);
    this.generateNoteDetails = this.generateNoteDetails.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
  }

  loadNote(id) {
    this.props.loadNote(this.props.notes[id]);
  }

  generateNoteDetails() {
    var noteDetails = [];
    if(Object.keys(this.props.notes).length) {
      for(let key in this.props.notes) {
        let item = this.props.notes[key];
        if(this.props.filter !== '') {
          if(!(item.body.blocks.some((curr) => curr.text.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1))) {
            continue;
          }
        }
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

  searchNotes({ target: { value }}) {
    this.props.updateFilter(value);
    this.generateNoteDetails();
  }

  render() {
    return (
      <div>
        <SearchBar
          searchNotes={this.searchNotes} />
        <div className={styles.list}>
          <ul>
            {this.generateNoteDetails()}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ notes, current }) => ({
    notes: notes.notes,
    filter: notes.filter
  }), {
    loadNote,
    updateFilter
  }
)(NoteList);
