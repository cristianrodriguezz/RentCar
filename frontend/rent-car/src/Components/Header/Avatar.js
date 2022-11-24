import React from 'react'
import './avatar.css'
import useFetch from '../../Utils/useFetch'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'

const Avatar = () => {

  const {user} = useContext(Context);

  const response = useFetch(`http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/${user.username}`)


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