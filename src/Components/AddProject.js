import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    sexos: ['F', 'M']
  }

  handleSubmit(e){
    // console.log('Submitted');
    if (this.refs.nome.value === '') {
      alert('Nome é necessário!');
    } else {
      this.setState({novoCliente: {
        nome: this.refs.nome.value,
        idade: this.refs.idade.value,
        sexo: this.refs.sexo.value,
        endereco: this.refs.endereco.value,
        email: this.refs.email.value,
      }}, function() {
        // console.log(this.state);
        this.props.addCliente(this.state.novoCliente)
      })
    }
    e.preventDefault();
  }

  render() {
    let sexoOptions = this.props.sexos.map(sexo => {
      return <option key={sexo} value={sexo}>{sexo}</option>
    });
    return (
      <div>
        <h3>Adiciona Cliente</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Nome:</label>
            <input type='text' ref='nome' />
          </div>
          <div>
            <label>Idade:</label>
            <input type='number' ref='idade' />
          </div>
          <div>
            <label>Sexo:</label>
            <select ref='sexo'>
              {sexoOptions}
            </select>
          </div>
          <div>
            <label>Endereço:</label>
            <input type='text' ref='endereco' />
          </div>
          <div>
            <label>E-mail:</label>
            <input type='email' ref='email' />
          </div>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default AddProject;
