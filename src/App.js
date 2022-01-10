import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      arrCards: [],
      isSaveButtonDisabled: true,
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.btnEnable = this.btnEnable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.hasTrunfoCard = this.hasTrunfoCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.btnEnable());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      arrCards: [...prevState.arrCards, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.hasTrunfoCard());
  }

  deleteCard = (selectCard) => {
    const { arrCards } = this.state;
    const filter = arrCards.filter((card) => card.cardName !== selectCard.cardName);
    this.setState({
      arrCards: [...filter],
      hasTrunfo: filter.some((card) => card.cardTrunfo),
    });
  }
  // https://stackoverflow.com/questions/48077103/remove-item-from-array-in-react

  hasTrunfoCard() {
    const { arrCards } = this.state;
    this.setState({ hasTrunfo: arrCards.some((card) => card.cardTrunfo) });
  }

  btnEnable() {
    const maxNumberAttr = 90;
    const sumMaxAttr = 210;

    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const validation = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardAttr1 <= maxNumberAttr
      && cardAttr1 >= 0
      && cardAttr2 <= maxNumberAttr
      && cardAttr2 >= 0
      && cardAttr3 <= maxNumberAttr
      && cardAttr3 >= 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sumMaxAttr
    );
    this.setState({ isSaveButtonDisabled: !validation });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      cardRare,
      isSaveButtonDisabled,
      arrCards,
    } = this.state;

    return (
      <div className="trunfo-game">
        <section className="create-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardTrunfo={ cardTrunfo }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="preview-card">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardTrunfo={ cardTrunfo }
              cardRare={ cardRare }
            />
          </div>
        </section>
        <section className="section-cards">
          {arrCards.map((card) => (
            <div className="card-button" key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardTrunfo={ card.cardTrunfo }
                cardRare={ card.cardRare }
              />
              <button
                type="button"
                className="deleteCard"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(card) }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
