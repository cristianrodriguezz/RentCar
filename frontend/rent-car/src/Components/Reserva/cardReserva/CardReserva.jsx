import React from 'react'
import './cardReserva.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardReserva = (props) => {

    const style = {
        backgroundImage: `url()`
    }

  return (
    <div className='containerCardReserva'>
        <h2>Detalle de reserva</h2>
        <div className='contenidoCardReserva'>
            <img className='containerImagenReserva' src={'https://images.unsplash.com/photo-1610399214658-52b9fdea4627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt='auto'/>
            <div className='contenidoCheck'>
                <h3>{props?.titulo}</h3>
                <p className='ubicacionCardReserva'><LocationOnIcon/>{props?.ciudad.nombre}, {props?.ciudad.pais}</p>
                <hr />
                <div className='containerCheckin'>
                    <p>Check in</p>
                    <p>Seleccione fecha</p>
                </div>
                <hr />
                <div className='containerCheckout'>
                    <p>Check out</p>
                    <p>Seleccione fecha</p>
                </div>
                <button>Confirmar reserva</button>
            </div>
        </div>
    </div>
  )
}

export default CardReserva