import React from 'react'
import './bloqueReserva.scss'
import CalendarioReservas from './CalendarioReservas'

const BloqueReserva = () => {
  return (
    <div className='container'>
        <div className='container-reserva'></div>
        <CalendarioReservas className={"date-range"} />
        <div className='containerReserva'>
          <div className='texto-reserva'>Agregá tu fecha de viajes para obtener precios exactos</div>
          <button className='boton-reserva' >Iniciar reserva</button>
        </div>
    </div>
  )
}

export default BloqueReserva