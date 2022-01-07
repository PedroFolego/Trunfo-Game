import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      description: '',
      atrr1: 0,
      atrr2: 0,
      atrr3: 0,
      image: '',
      rare: '',
      trunfo: false,
    }

    this.onInputChange = this.onInputChange.bind(this);
  } 

  onInputChange() {

  }
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card  />
      </div>
    );
  }
}

export default App;
