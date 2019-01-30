import React, { Component } from "react";
import BeyContainer from "./BeyContainer.js";
import Favorites from "./Favorites.js";
import beyImages from "./beyImages";
import "./App.css";

class App extends Component {
  state = {
    beyImages: beyImages,
    favorites: []
  }
  handleFavorite = (clickedBey) => {
    let newBeyImages = [...this.state.beyImages];
    let newBey = newBeyImages.find(bey => bey.id === clickedBey.id);
    newBey.favorite = !newBey.favorite;
    
    let newFavs = Array.from(new Set([...this.state.favorites, newBey]));
    this.setState({
      beyImages: newBeyImages,
      favorites: newFavs
    });
  };
  handleUnfavorite = (clickedBey) => {
    clickedBey.favorite = !clickedBey.favorite;
    let newFavs = this.state.favorites.filter(bey => bey.id !== clickedBey.id);
    this.setState({
      beyImages: [...this.state.beyImages],
      favorites: newFavs
    });
  };
  render() {
    return (
      <div className="container">
        <BeyContainer beyImages={this.state.beyImages} handleFavorite={this.handleFavorite} />
        <Favorites beyImages={this.state.favorites} handleFavorite={this.handleUnfavorite} />
      </div>
    );
  }
}

export default App;
