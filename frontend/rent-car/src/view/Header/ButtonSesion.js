import  Avatar  from './Avatar';
import React, { useState } from 'react'


const ButtonSesion = () => {
    const style = {
        'background': '#1DBEB4',
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
    }



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