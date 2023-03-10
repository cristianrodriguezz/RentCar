import React from 'react'
import './cardReserva.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import { Context } from '../../../Contexts/CategoryContextProvider';
import { formatDateFront} from '../../../Utils/formatDate'


const CardReserva = (props) => {
    const {selectedDates} = useContext(Context)

    if(selectedDates){
        var checkin = formatDateFront(selectedDates[0].startDate)
        var checkout = formatDateFront(selectedDates[0].endDate)
    }

  return (
    <div className='containerCardReserva'>
        <h2>Detalle de reserva</h2>
        <div className='contenidoCardReserva'>
            <img className='containerImagenReserva' src={props?.imagenes?.imagenes.filter(item => item.esPrincipal && item)[0].url} alt='auto'/>
            <div className='contenidoCheck'>
                <h3>{props?.titulo}</h3>
                <p className={'ubicacionCardReserva'}><LocationOnIcon/>{props?.ciudad?.nombre}, {props?.ciudad?.pais}</p>
                <hr />
                <div className='containerCheckin'>
                    <p>Check in</p>
                    <p>{selectedDates ? checkin : "Seleccione una fecha"}</p>
                </div>
                <hr />
                <div className='containerCheckout'>
                    <p>Check out</p>
                    <p>{selectedDates ? checkout : "Seleccione una fecha"}</p>
                </div>
                <button onClick={props?.handleSubmit1}>Confirmar reserva</button>
            </div>
        </div>
    </div>
  )

}

export default CardReserva