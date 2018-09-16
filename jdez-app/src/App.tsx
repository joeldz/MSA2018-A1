import * as React from 'react';
import Form from "./components/Form";
import Price from "./components/Price";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Title />
        <Form />
        <Price />
      </div>
    );
  }
}

export default App;
