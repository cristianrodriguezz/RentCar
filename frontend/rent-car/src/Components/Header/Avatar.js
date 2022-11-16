import React from 'react'
import './avatar.css'

const Avatar = () => {

  const usuario = {
    email: "user@mail.com",
    password: "user",
    nombre: "Bruno",
    apellido: "Rodriguez"
}

  return (
    <>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {usuario.nombre.charAt(0)} {usuario.apellido.charAt(0)}
        </div>
        <div className='nombreUsuario'>
          <p>{usuario.nombre}</p>
          <p>{usuario.apellido}</p>
        </div>
      </div>
      
    </>
  )
}

export default Avatar