import React from "react";
import BeyCard from "./BeyCard.js";

class BeyContainer extends React.Component {

  createBeyCards = () => {
    return this.props.beyImages.map(bey => (<BeyCard key={bey.id} bey={bey} handleFavorite={this.props.handleFavorite} />));
  }
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.createBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
