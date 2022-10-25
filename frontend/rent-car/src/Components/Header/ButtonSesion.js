import  Avatar  from './Avatar';
import React, { useState } from 'react'


const ButtonSesion = () => {
    const style = {
        'background': '#1DBEB4',
        'boxShadow':' 0px 2px 4px rgba(0, 0, 0, 0.12)',
        'borderRadius': '5px',
        'border':'none',
        'padding':'8px'
    }



    const [sesion, setSesion] = useState(false);

  return sesion ? (
    <>
        <Avatar/>
        <a style={style} href ='/logOut'>Cerrar Sesion</a>
    </>
  )
  :
  (
    <>
        <a style={style} href='/signUp'>Registrate</a>
        <a style={style}  href='/login'>Iniciar Sesion</a>
    </>
  )
}

export default ButtonSesion
