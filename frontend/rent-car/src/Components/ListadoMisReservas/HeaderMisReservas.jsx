import React from 'react'
import { useNavigate } from 'react-router';
import Arrow from '../arrow/Arrow';
import './HeaderMisReservas.scss'

const HeaderMisReservas = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/");
    }
  return (
    <div className='ContainerHeader'>
        <h1 className='MisResevasTitulo'>Mis Reservas</h1>
        <Arrow className='Flecha' click={handleClick}/>
    </div>
  )
}

export default HeaderMisReservas