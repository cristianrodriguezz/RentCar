import React from 'react'
import './bloqueReserva.css'
import CalendarioReservas from './CalendarioReservas'

const BloqueReserva = () => {
  return (
    <div className='container'>
        <div className='container-reserva'></div>
        <CalendarioReservas className={"date-range"} />
        <div className='texto-reserva'>Reserve su auto!</div>
        <button className='boton-reserva' >Reservar</button>
    </div>
  )
}

export default BloqueReserva