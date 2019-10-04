import React from "react";
import Clock from "./Clock";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault(); //previene el comportamiento default del form (refresh al presionar enter)
    this.props.submited(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <Clock />
      </div>
    );
  }
}

export default SearchBar;
