import React from 'react';

class Form extends React.Component {
  render() {

    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label>
          Nome:
          <input type="text" name="name" value={cardName} onChange={onInputChange} data-testid="name-input" />
        </label>
        <label>
          Descrição:
          <textarea type="text" name="description" value={cardDescription} onChange={onInputChange} data-testid="description-input" />
        </label>
        <label>
          Atributo1:
          <input type="number" name="attr1" value={cardAttr1} onChange={onInputChange} data-testid="attr1-input" />
        </label>
        <label>
          Atributo2:
          <input type="number" name="attr2" value={cardAttr2} onChange={onInputChange} data-testid="attr2-input" />
        </label>
        <label>
          Atributo3:
          <input type="number" name="attr3" value={cardAttr3} onChange={onInputChange} data-testid="attr3-input" />
        </label>
        <label>
          Imagem:
          <input type="text" name="image" value={cardImage} onChange={onInputChange} data-testid="image-input" />
        </label>
        <label>
          <select name="rare" value={cardRare} onChange={onInputChange} data-testid="rare-input" >
            Raridade:
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label>
          Carta Trunfo:
          <input type="checkbox" name="trunfo" value={cardTrunfo} onChange={onInputChange} data-testid="trunfo-input" />
        </label>
        <label>

          <button
            type="submit"
            onClick={onSaveButtonClick}
            disabled={isSaveButtonDisabled}
            data-testid="save-button"
          >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
