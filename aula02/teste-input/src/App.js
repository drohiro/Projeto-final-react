import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

initialState = {nome: '', Cidade: 'Sao Paulo', data: '2001-01-01'}

constructor(props){
  super(props)
  this.state = this.initialState
}
  
alteraNome = function (nome) {
  this.setState({nome: EventSource.target.value})
}

alteraCidade = function (cidade) {
  this.setState({cidade})
}

alteraData = function (data) {
  this.setState({data})
}
  
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type='text' value={this.state.nome} onChange={(e) => this.alteraNome(e.target.value)}/>
        <input type='text' value={this.state.cidade} onChange={(e) => this.alteraCidade(e.target.value)}/>
        <input type='date' value={this.state.data} onChange={(e) => this.alteraData(e.target.value)}/>
      </header>
    </div>
  );
}}

