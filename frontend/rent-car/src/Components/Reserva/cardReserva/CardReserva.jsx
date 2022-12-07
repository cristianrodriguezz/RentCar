import React from 'react'
import './cardReserva.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import { Context } from '../../../Contexts/CategoryContextProvider';
import {formatDateABase, formatDateFront} from '../../../Utils/formatDate'
import {fetchReserva } from '../../../Utils/post'
import { useParams } from "react-router";

const CardReserva = (props) => {
    const {selectedDates} = useContext(Context)
    const {hora} = useContext(Context)

    const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    const JWT = localStorage.getItem('user')
    const params = useParams();
    if(selectedDates){
        var checkin = formatDateFront(selectedDates[0].startDate)
        var checkout = formatDateFront(selectedDates[0].endDate)
        var fechaInicioReserva = formatDateABase(selectedDates[0].startDate);
        var fechaFinalReserva = formatDateABase(selectedDates[0].endDate);
    }
    const reserva = {
      horaComienzoDeReserva: hora ,
      fechaInicioReserva: fechaInicioReserva ,
      fechaFinalReserva: fechaFinalReserva,
      user_id:usuarioSessionStorage?.user_Id,
      producto_id:params.id
    }
    console.log(reserva)
  
    const reservar = () =>{
        fetchReserva('http://localhost:8080/reservas',reserva,JWT);
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
                <button onClick={reservar} form='form'>Confirmar reserva</button>
            </div>
        </div>
    </div>
  )
}

export default CardReserva