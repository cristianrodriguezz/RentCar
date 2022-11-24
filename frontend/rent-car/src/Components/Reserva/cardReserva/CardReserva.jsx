import React, { useContext } from 'react'
import './cardReserva.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardReserva = (props) => {
    const [horaReserva] = useContext();

    /*
    const submitReserva = ({hora_Reserva = horaReserva}) =>{



    }
    */
  return (
    <div className='containerCardReserva'>
        <h2>Detalle de reserva</h2>
        <div className='contenidoCardReserva'>
            <img className='containerImagenReserva' src={props?.imagenes.imagenes[0]?.url} alt='auto'/>
            <div className='contenidoCheck'>
                <h3>{props?.titulo}</h3>
                <p className={'ubicacionCardReserva'}><LocationOnIcon/>{props?.ciudad?.nombre}, {props?.ciudad?.pais}</p>
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