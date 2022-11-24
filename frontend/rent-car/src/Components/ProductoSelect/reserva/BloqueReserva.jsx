import React from 'react'
import { useNavigate, useParams } from 'react-router';
import './bloqueReserva.scss'
import CalendarioReservas from './CalendarioReservas'

const BloqueReserva = (props) => {

  return (
    <div className='container'>
        <div className='container-reserva'></div>
        <CalendarioReservas className={"date-range"} titulo={'Fechas disponibles'} />
        <div className='containerReserva'>
          <div className='texto-reserva'>Agregá tu fecha de viajes para obtener precios exactos</div>
          <button onClick={props.ubicacion} className='boton-reserva' >Iniciar reserva</button>
        </div>
    </div>
  )
}

export default BloqueReserva