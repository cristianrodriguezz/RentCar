import  Avatar  from './Avatar';
import React, { useState } from 'react'


const ButtonSesion = () => {
    const [sesion, setSesion] = useState(false);

  return sesion ? (
    <>
        <Avatar/>
        <button>Cerrar Sesion</button>
    </>
  )
  :
  (
    <>
        <button>Registrate</button>
        <button>Iniciar Sesion</button>
    </>
  )
}

export default ButtonSesion