import React from 'react'
import './Vehicle.css'

function Vehicle(props) {
  return (
    <div className="Vehicle">
      <ul>
        <li><strong>ID:</strong> {props.vehicle.id}</li>
        <li><strong>Name:</strong> {props.vehicle.name}</li>
        <li><strong>Color:</strong>{props.vehicle.brand}</li>
        <li><strong>Email:</strong> {props.vehicle.color}</li>
        <li><strong>year:</strong> {props.vehicle.year}</li>
        <li><strong>board:</strong> {props.vehicle.board}</li>
      </ul>
      <button onClick={props.removerVehicle}>&times;</button>
    </div>
  )
}
export default Vehicle