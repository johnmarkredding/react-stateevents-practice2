import React from "react";
import BeyCard from "./BeyCard.js";

export default class Favorites extends React.Component {
  createBeyCards = () => {
    return this.props.beyImages.map(bey => (<BeyCard key={bey.id} bey={bey} handleFavorite={this.props.handleFavorite} />));
  }
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.createBeyCards()}
      </div>
    );
  }
}
