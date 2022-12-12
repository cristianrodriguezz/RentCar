import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import './sinReserva.scss'


const SinReserva = () => {
  return (
    <div className='sinReserva'>
    <h1 style={{color:"grey",fontWeight:"bold", padding:"1rem"}}>Todavia no se realizaron reservas</h1>
    <FontAwesomeIcon className='iconCar' icon={faCarSide} />
    </div>
  )
}

export default SinReserva
