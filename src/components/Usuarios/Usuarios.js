import React, { Component } from 'react'
import { useEffect } from 'react'
import api from '../../resources/api'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: []
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  componentDidMount() {
    fetch('http://localhost:3001/vehicles')
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados)

      const usuarios = dados.map(usuario => {
        return {
          id: usuario.id,
          nome: usuario.name,
          sobrenome: usuario.brand,
          email: usuario.board
        }
      })
      console.log(usuarios);
      this.setState({ usuarios});
    })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      let usuarios = this.state.usuarios
      usuarios = usuarios.filter(x => x.id !== usuario.id)
      this.setState({ usuarios: usuarios })
    }
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios