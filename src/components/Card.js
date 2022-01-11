import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <img
            src={ cardImage }
            alt={ cardName }
            className="img-card"
            data-testid="image-card"
          />
        </div>
        <div className="card-text">
          <span data-testid="rare-card">
            { cardRare }
          </span>
          <h2 data-testid="name-card">
            { cardName }
          </h2>
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div data-testid="attr1-card" className="value">
              { cardAttr1 }
            </div>
            <div className="type">Att1</div>
          </div>
          <div className="stat border">
            <div data-testid="attr2-card" className="value">
              { cardAttr2 }
            </div>
            <div className="type">Att2</div>
          </div>
          <div className="stat">
            <div data-testid="attr3-card" className="value">
              { cardAttr3 }
            </div>
            <div className="type">Att3</div>
          </div>
        </div>
        {cardTrunfo
          ? <div data-testid="trunfo-card" className="cardTrunfo">Super Trunfo</div>
          : ''}
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
