import React, { Component } from 'react';

/*const SearchBar = () => {
  return <input />; //this needs the react import cuz it means React.createElement
};
This works but we need something more inteligent that detects when is been typed, more aware
this is named class based component*/

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render()  {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}//when something was typed, nothing were changed. only triggered an event
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
  );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
