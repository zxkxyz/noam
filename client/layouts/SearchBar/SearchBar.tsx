import * as React from 'react';

export interface SearchBarProps {
  searchNotes: (any) => void
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSearchChange(e) {
    this.props.searchNotes(e);
  }

  onKeyPress(e) {
    if(e.keyCode === 13) {

    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search notes..."
          onChange={this.onSearchChange}
          onKeyPress={this.onKeyPress} />
      </div>
    )
  }
}

export default SearchBar;
