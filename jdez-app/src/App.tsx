import * as React from 'react';
import Price from "./components/Price";
import Title from "./components/Title";
import Input from '@material-ui/core/Input';
//import Button from '@material-ui/core/Button';
import './App.css';
import { Grid, Paper } from '../node_modules/@material-ui/core';


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
      <Grid container>
        <Grid item sm>
          <Paper></Paper>
        </Grid>
        <Grid item sm>
          <Paper style={{ padding:20, width:550 }} elevation={2}>
            <Title />
            <form onSubmit={this.getPrice}>
              <Input type="text" name="value" placeholder="Amount..."/>
              <Input type="text" name="symbol" placeholder="BTC, ETH, etc..."/>
              <button >Get Price</button>
            </form>
            <Price 
              value={this.state.value}
              usd={this.state.usd} 
              nzd={this.state.nzd} 
              error={this.state.error}
            />
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper></Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
