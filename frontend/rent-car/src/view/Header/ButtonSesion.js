import  Avatar  from './Avatar';
import React, { useState } from 'react'


const ButtonSesion = () => {
    const style = {
        'background': '#1DBEB4',
        'box-shadow':' 0px 2px 4px rgba(0, 0, 0, 0.12)',
        'border-radius': '5px',
        'border':'none'
    }



    const [sesion, setSesion] = useState(false);

  return sesion ? (
    <>
        <Avatar/>
        <button style={style}>Cerrar Sesion</button>
    </>
  )
  :
  (
    <>
        <button style={style}>Registrate</button>
        <button style={style}>Iniciar Sesion</button>
    </>
  )
}

export default ButtonSesion