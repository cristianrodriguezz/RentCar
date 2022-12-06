import React from 'react'
import './avatar.css'

const Avatar = () => {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {usuarioSessionStorage?.apellido?.charAt(0).toUpperCase()} {usuarioSessionStorage?.nombre?.charAt(0).toUpperCase()}
        </div>
        <div className='nombreUsuario'>
          <p>{usuarioSessionStorage?.apellido}</p>
          <p>{usuarioSessionStorage?.nombre}</p>
        </div>
      </div>
      
    </>
  )
}

export default Avatar