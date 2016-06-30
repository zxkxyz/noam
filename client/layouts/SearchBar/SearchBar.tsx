import * as React from 'react';

export interface SearchBarProps {
  searchNotes: (any) => void
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search notes..."
          onChange={this.props.searchNotes}/>
      </div>
    )
  }
}

export default SearchBar;
