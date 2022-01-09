import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }

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
      // hasTrunfo,
      // isSaveButtonDisabled,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    // console.log(isSaveButtonDisabled);
    return (
      <form onSubmit={ this.handleSubmit } id="form">
        <label htmlFor="cardName">
          Nome:
          <input
            id="cardName"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            id="cardDescription"
            type="text"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            id="cardAttr1"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            id="cardAttr2"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            id="cardAttr3"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem:
          <input
            id="cardImage"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          Raridade:
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="cardTrunfo">
          Carta Trunfo:
          <input
            id="cardTrunfo"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
        >
          Salvar
        </button>
        {/* {console.log(document.getElementById('button'))} */}
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
