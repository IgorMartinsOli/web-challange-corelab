import React, { Component } from 'react'
import './AdicionarVehicle.css'

class AdicionarVehicle extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      vehicle: {}
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    const { name, value } = event.target
    this.setState({ vehicle: { ...this.state.vehicle, [name]: value } })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    
    const vehicle = this.state.vehicle

    fetch('http://localhost:3001/vehicles/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(vehicle)
    })
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados);
      this.setState({ vehicle: dados})
    })
  }

  render() {
    return (
      <div className="AdicionarVehicle">
        <h2>Adicionar Veiculo</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="text"
                name="name"
                placeholder="Name"
                //value={this.state.vehicle.name}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                //value={this.state.vehicle.brand}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="text"
                name="color"
                placeholder="Color"
                //value={this.state.vehicle.color}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <input
                type="text"
                name="year"
                placeholder="Year"
                //value={this.state.vehicle.year}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <input
                type="text"
                name="board"
                placeholder="Board"
                //value={this.state.vehicle.color}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }
}

export default AdicionarVehicle