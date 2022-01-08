import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      arrCards: [],
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.btnEnable = this.btnEnable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  btnEnable() {

    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1 <= 90
      && cardAttr1 >= 0
      && cardAttr2 <= 90
      && cardAttr2 >= 0
      && cardAttr3 <= 90
      && cardAttr3 >= 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= 230
    ) {
      this.setState({
        isSaveButtonDisabled: false
      })
    } else {
      this.setState({
        isSaveButtonDisabled: true
      })
    }
  }

  onSaveButtonClick() {
    console.log('entrei');
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3, cardTrunfo, cardRare } = this.state;
    console.log(this);
    
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo
    }

    this.setState((prevState) => ({
      arrCards:[ ...prevState.arrCards, card ],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true
    }))


  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type == 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.btnEnable())
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form value={this.state} onInputChange={this.onInputChange} onSaveButtonClick={this.onSaveButtonClick} />
        <Card value={this.state} />
      </div>
    );
  }
}

export default App;
