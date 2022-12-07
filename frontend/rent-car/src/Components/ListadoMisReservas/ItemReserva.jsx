import React from 'react'

const ItemReserva = (props) => {
  return (
    <div  className='containerCar'>
        <div className='containerImageCar' ></div>
      <div className='styles'>  
          <p>Hora de comienzo de reserva: {props.hora}</p>
          <p>
          Fecha inicio: {props.fechaInicio}
          </p>
          <p>
          Fecha final: {props.fechaFinal}
          </p>
          <button className='buttonStyle'>Ver detalle</button>
      </div>
    </div>
  )
}

export default ItemReserva