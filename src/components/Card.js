import React from "react";

class Card extends React.Component {

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props.value;

    let cardTrunfoTrue = cardTrunfo == true ? 'Super Trunfo' : '';

    return (
      <div>
        <h2 data-testid="name-card">Nome:{cardName}</h2>
        <img src={cardImage} data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        <p data-testid="trunfo-card">{cardTrunfoTrue}</p>
      </div>
    )
  }
}

export default Card;