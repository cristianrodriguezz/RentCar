import React from 'react'
import CalendarTwo from '../../Reserva/CalendarTwo'
import './bloqueReserva.scss'


const BloqueReserva = (props) => {

  return (
    <div className='container'>
        <CalendarTwo/>
        <div className='containerReserva'>
          <div className='texto-reserva'>Agregá tu fecha de viajes para obtener precios exactos</div>
          <button onClick={props.ubicacion} className='boton-reserva' disabled={props.desactivado} >Iniciar reserva</button>
        </div>
    </div>
  )
}

export default BloqueReserva