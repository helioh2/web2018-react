import React, { Component } from 'react';

class ClienteItem extends Component {
  render() {
    let cliente = this.props.cliente
    return (
      <tr className="Cliente">
        <td>{cliente.nome}</td>
        <td>{cliente.idade}</td>
        <td>{cliente.sexo}</td>
        <td>{cliente.endereco}</td>
        <td>{cliente.email}</td>
        <td></td>
      </tr>
    );
  }
}

export default ClienteItem;
