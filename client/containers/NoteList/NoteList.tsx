import * as React from 'react';
import { connect } from 'react-redux';
import NoteDetail from '../../layouts/NoteDetail/NoteDetail.tsx';

const styles = require('./NoteList.css');

export interface NoteListProps {
  notes: any
}

class NoteList extends React.Component<NoteListProps, {}> {
  constructor(props) {
    super(props);

    this.generateNoteDetails = this.generateNoteDetails.bind(this);
  }

  generateNoteDetails() {
    var noteDetails = [];
    if(Object.keys(this.props.notes).length) {
      for(let key in this.props.notes) {
        let item = this.props.notes[key];
        noteDetails.push(<NoteDetail title={item.title} body={item.body.blocks[0].text} timestamp={item.timestamp} />)
      }
    }
    return noteDetails;
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
  }), {}
)(NoteList);
