import * as React from 'react';
import Price from "./components/Price";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
  getPrice = async (e:any) => {
    e.preventDefault();
    const symbol = e.target.elements.symbol.value.toUpperCase();
    const api_call = await fetch('https://min-api.cryptocompare.com/data/price?fsym='+symbol+'&tsyms=NZD,USD');
    const data = await api_call.json();
    console.log(data);
  }
  
  public render() {
    return (
      <div>
        <Title />
        <form onSubmit={this.getPrice}>
          <input type="text" name="symbol" placeholder="Symbol..."/>
          <button>Get Price</button>
        </form>
        <Price />
      </div>
    );
  }
}

export default App;
