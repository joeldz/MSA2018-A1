import * as React from 'react';
import Price from "./components/Price";
import Title from "./components/Title";
import Input from '@material-ui/core/Input';
//import Button from '@material-ui/core/Button';
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
    if (symbol && inputValue) {
      console.log(data);
      this.setState({
        value: inputValue,
        usd: data.USD,
        nzd: data.NZD,
        error: ""
      })
    } else {
      console.log(data);
      this.setState({
        value: undefined,
        usd: undefined,
        nzd: undefined,
        error: "Please enter values"
      })
    }
  }
  
  public render() {
    return (
      <div>
        <Title />
        <form onSubmit={this.getPrice}>
          <Input type="text" name="value" placeholder="Amount..." margin-left= "50px"/>
          <Input type="text" name="symbol" placeholder="Symbol..." margin-left= "50px"/>
          <button >Get Price</button>
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

export default App;
