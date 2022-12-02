import React from 'react'
import './avatar.css'

const Avatar = () => {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {usuarioSessionStorage?.nombre?.charAt(0).toUpperCase()} {usuarioSessionStorage?.apellido?.charAt(0).toUpperCase()}
        </div>
        <div className='nombreUsuario'>
          <p>{usuarioSessionStorage?.nombre}</p>
          <p>{usuarioSessionStorage?.apellido}</p>
        </div>
      </div>
      
    </>
  )
}

export default Avatar