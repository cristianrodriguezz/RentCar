import React from 'react'
import './avatar.css'
import useFetch from '../../Utils/useFetch'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'

const Avatar = () => {

  const {user,setUser} = useContext(Context);

  const response = useFetch(`http://localhost:8080/usuarios/${user}`)


  return (
    <>
      <div className='usuarioLogeado'>
        <div className='avatar'>
          {response?.respuesta?.username?.charAt(0).toUpperCase()} {response?.respuesta?.apellido?.charAt(0).toUpperCase()}
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