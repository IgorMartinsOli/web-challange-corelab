import React, { Component } from 'react'
import { useEffect } from 'react'

import AdicionarVehicle from '../AdicionarVehicle/AdicionarVehicle'
import Vehicle from '../Vehicle/Vehicle'

class Vehicles extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }

    this.AdicionarVehicle = this.AdicionarVehicle.bind(this)
  }

  AdicionarVehicle(vehicle) {
    const vehicles = [...this.state.vehicles, vehicle]
    this.setState({ vehicles: vehicles })
  }

  componentDidMount() {
    fetch('http://localhost:3001/vehicles')
    .then(resposta => resposta.json())
    .then(dados => {
      const vehicles = dados.map(vehicle => {
        return {
          id: vehicle.id,
          name: vehicle.name,
          brand: vehicle.brand,
          color: vehicle.color,
          year: vehicle.year,
          board: vehicle.board
        }
      })
      this.setState({ vehicles });
    })
  }

  removerVehicle(vehicles) {
    if (window.confirm(`Tem certeza que deseja remover "${vehicles.name} ${vehicles.sobrenome}"?`)) {
      let vehicles = this.state.vehicles
      vehicles = vehicles.filter(x => x.id !== vehicles.id)
      this.setState({ vehicles: vehicles })
    }
  }

  render() {
    return (
      <>
        <AdicionarVehicle adicionarVechile={this.adicionarVehicle} />

        {this.state.vehicles.map(vehicle => (
          <Vehicle key={vehicle.id}
            vehicle={vehicle}
            removerVehicle={this.removerVehicle.bind(this, vehicle)}
          />
        ))}
      </>
    )
  }
}

export default Vehicles