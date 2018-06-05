import React, { Component } from 'react';
import './App.css';
import Clientes from './Components/Clientes'
import AddProject from './Components/AddProject'

class App extends Component {

  constructor() {
    super()
    this.state = {
      clientes: [
        {
          nome: 'Fulano',
          idade: 23,
          sexo: 'M',
          endereco: 'Rua Migué',
          email: 'fulano@uol'
        },
        {
          nome: 'Beltrana',
          idade: 25,
          sexo: 'F',
          endereco: 'Rua dos Bobos',
          email: 'beltra@gmail'
        },
        {
          nome: 'Ciclano',
          idade: 31,
          sexo: 'M',
          endereco: 'Rua Jaguaruna',
          email: 'ciclano@uol'
        }
      ]
    }
  }

  handleAddCliente(cliente) {
    // console.log(cliente);
    let clientes = this.state.clientes;
    clientes.push(cliente);
    this.setState({clientes:clientes});
  }

  render() {
    return (
      <div className="App">
        Clientes
        <Clientes clientes={this.state.clientes} />
        <br />
        <AddProject addCliente={this.handleAddCliente.bind(this)}/>
      </div>
    );
  }
}

export default App;
