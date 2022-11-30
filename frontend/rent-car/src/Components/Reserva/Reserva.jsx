import React from 'react'

import CalendarTwo from './CalendarTwo';
import CardReserva from './cardReserva/CardReserva';
import FormHoraLlegada from './FormHoraLlegada';
import FormReserva from './FormReserva'

const Reserva = (props) => {
  
  return (
    <div>
        <div className='containerReservas'>
            <h2>Completá tus datos</h2>
            <FormReserva />
            <div className='fechaReservas'>
                <h2>Seleccioná tu fecha de reserva</h2>
                <CalendarTwo/>
            </div>
            <div className='horarioLlegada'>
                <h3>Tu horario de llegada</h3>
                <FormHoraLlegada/>
            </div>
            <CardReserva titulo={props?.tituloCard} ciudad={props?.ubicacion} pais={props?.ubicacion} imagenes={props?.imagenes} />
        </div>
    </div>

  )
}

export default Reserva