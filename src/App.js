import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.isSaveButtonDisabled = true;
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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.btnEnable = this.btnEnable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(this);
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

    this.isSaveButtonDisabled = true;

    this.setState((prevState) => ({
      arrCards: [...prevState.arrCards, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  btnEnable() {
    const maxNumberAttr = 90;
    const sumMaxAttr = 230;

    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1 <= maxNumberAttr
      && cardAttr1 >= 0
      && cardAttr2 <= maxNumberAttr
      && cardAttr2 >= 0
      && cardAttr3 <= maxNumberAttr
      && cardAttr3 >= 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sumMaxAttr
    ) {
      this.isSaveButtonDisabled = false;
      // this.setState({
      //   isSaveButtonDisabled: false,
      // });
    } else {
      this.isSaveButtonDisabled = true;
      // this.setState({
      //   isSaveButtonDisabled: true,
      // });
    }
  }

  render() {
    // const { value } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          value={ this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
        />
        <Card value={ this.state } />
      </div>
    );
  }
}

export default App;
