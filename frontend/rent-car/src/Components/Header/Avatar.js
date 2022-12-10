import React from 'react'
import { Link } from 'react-router-dom';
import MisReservas from '../../view/Reservas/MisReservas';
import './avatar.css'

const Avatar = () => {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      <Link to={"/misReservas"}>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {usuarioSessionStorage?.apellido?.charAt(0).toUpperCase()} {usuarioSessionStorage?.nombre?.charAt(0).toUpperCase()}
        </div>
        <div className='nombreUsuario'>
          <p>{usuarioSessionStorage?.apellido}</p>
          <p>{usuarioSessionStorage?.nombre}</p>
        </div>
      </div>
      </Link>
      
    </>
  )
}

export default Avatar