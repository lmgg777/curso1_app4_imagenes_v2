import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async termSearched => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: termSearched,
        per_page: 30
      }
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar submited={this.onSearchSubmit} />
        Found {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
