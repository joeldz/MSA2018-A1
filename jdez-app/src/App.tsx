import * as React from 'react';
import Price from "./components/Price";
import Title from "./components/Title";
import './App.css';
 

class App extends React.Component {
  state = {
    value: undefined,
    usd: undefined,
    nzd: undefined,
    error: undefined
  }
  
  getPrice = async (e:any) => {
    e.preventDefault();
    const symbol = e.target.elements.symbol.value.toUpperCase();
    const inputValue = e.target.elements.value.value;
    const api_call = await fetch('https://min-api.cryptocompare.com/data/price?fsym='+symbol+'&tsyms=NZD,USD');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      value: inputValue,
      usd: data.USD,
      nzd: data.NZD,
      error: ""
    })
  }
  
  public render() {
    return (
      <div>
        <Title />
        <form onSubmit={this.getPrice}>
          <input type="text" name="value" placeholder="Amount..."/>
          <input type="text" name="symbol" placeholder="Symbol..."/>
          <button>Get Price</button>
        </form>
        <Price 
          value={this.state.value}
          usd={this.state.usd} 
          nzd={this.state.nzd} 
          error={this.state.error}
        />
      </div>
    );
  }
}
//
export default App;
