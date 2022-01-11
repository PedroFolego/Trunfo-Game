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
      cardRare: 'normal',
      cardTrunfo: false,
      arrCards: [],
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      wordFilter: '',
      filterRare: 'todas',
      filterTrunfo: false,
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
    }, this.btnEnable());
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

    const validateAtt1 = (cardAttr1 <= maxNumberAttr && cardAttr1 >= 0);
    const validateAtt2 = (cardAttr2 <= maxNumberAttr && cardAttr2 >= 0);
    const validateAtt3 = (cardAttr3 <= maxNumberAttr && cardAttr3 >= 0);
    const validateSumAtt = (
      Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      <= sumMaxAttr
    );

    const validation = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && validateAtt1
      && validateAtt2
      && validateAtt3
      && validateSumAtt
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
      wordFilter,
      filterRare,
      filterTrunfo,
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
            <h2>Preview</h2>
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
          <h2>Todas as Cartas</h2>

          <input
            type="text"
            data-testid="name-filter"
            name="wordFilter"
            value={ wordFilter }
            onChange={ this.onInputChange }
          />
          <select
            data-testid="rare-filter"
            name="filterRare"
            value={ filterRare }
            onChange={ this.onInputChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="filterTrunfo"
            value={ filterTrunfo }
            onClick={ this.onInputChange }
          />
          {arrCards
            .filter((card) => card.cardName.includes(wordFilter)
              && (card.cardRare === filterRare || filterRare === 'todas'))
            .map((card) => (
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
