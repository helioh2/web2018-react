import React, { Component } from 'react';
import ClienteItem from './ClienteItem'

class Clientes extends Component {
  render() {
    // console.log(this.props)
    let clienteItems;
    if (this.props.clientes) {
      clienteItems = this.props.clientes.map(cliente => {
        // console.log(cliente)
        return (
          <ClienteItem key={cliente.nome} cliente={cliente} />
        )
      });
    }
    return (
      <div className="Clientes">
        Meus Projetos
        <thead>
          <td>Nome:</td>
          <td>Idade:</td>
          <td>Sexo:</td>
          <td>Endereço:</td>
          <td>E-mail:</td>
        </thead>
        {clienteItems}
      </div>
    );
  }
}

export default Clientes;
