import React from 'react'
import './avatar.css'
import useFetch from '../../Utils/useFetch'

const Avatar = () => {
/*
  const usuario = {
    email: "user@mail.com",
    password: "user",
    nombre: "Bruno",
    apellido: "Rodriguez"
}
*/

  const response = useFetch("http://localhost:8080/usuarios/lucasyoung500@gmail.com")


  return (
    <>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {response?.respuesta?.username?.charAt(0)} {response?.respuesta?.apellido?.charAt(0)}
        </div>
        <div className='nombreUsuario'>
          <p>{response?.respuesta?.username}</p>
          <p>{response?.respuesta?.apellido}</p>
        </div>
      </div>
      
    </>
  )
}

export default Avatar