import React from "react";

class BeyCard extends React.Component {
  handleFav = () => (this.props.handleFavorite(this.props.bey));

  render() {
    return (
      <div onClick={this.handleFav}>
        <h3>{this.props.bey.name}</h3>
        <img alt={this.props.bey.name} src={this.props.bey.img} />
      </div>
    );
  }
}

export default BeyCard;
