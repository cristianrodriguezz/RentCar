import React from 'react'
import { useNavigate } from 'react-router-dom';

import './avatar.css'

const Avatar = () => {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate()
  const handleCick = () =>{
    window.scrollTo(0, 0);
    navigate('/misReservas')
  }
  return (
    <>
      <div onClick={handleCick} style={{cursor:'pointer'}}>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {usuarioSessionStorage?.apellido?.charAt(0).toUpperCase()} {usuarioSessionStorage?.nombre?.charAt(0).toUpperCase()}
        </div>
        <div className='nombreUsuario'>
          <p>{usuarioSessionStorage?.apellido}</p>
          <p>{usuarioSessionStorage?.nombre}</p>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Avatar