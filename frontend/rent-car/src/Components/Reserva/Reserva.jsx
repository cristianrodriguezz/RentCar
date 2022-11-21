import React from 'react'
import CalendarioReservas from '../ProductoSelect/reserva/CalendarioReservas';
import CardReserva from './cardReserva/CardReserva';
import FormHoraLlegada from './FormHoraLlegada';
import FormReserva from './FormReserva'

const Reserva = (props) => {
    

  return (

    <div>
        <div className='containerReservas'>
            <h2>Completá tus datos</h2>
            <FormReserva/>
            <div className='fechaReservas'>
                <h2>Seleccioná tu fecha de reserva</h2>
                <CalendarioReservas selection='calendarReserva'/>
            </div>
            <div className='horarioLlegada'>
                <h2>Tu horario de llegada</h2>
                <FormHoraLlegada/>
            </div>
            <CardReserva titulo={props?.tituloCard} ciudad={props?.ubicacion} pais={props?.ubicacion} />
        </div>
    </div>

  )
}

export default Reserva