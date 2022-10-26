import  Avatar  from './Avatar';
import React, { useState , useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';


const ButtonSesion = () => {
    const style = {
        'background': '#1DBEB4',
        'boxShadow':' 0px 2px 4px rgba(0, 0, 0, 0.12)',
        'borderRadius': '5px',
        'border':'none',
        'padding':'8px'
    }
    const JWT = () => localStorage.getItem('user')

    const [sesion, setSesion] = useState(false);

    useEffect(() => {
      setSesion(JWT())
    }, [JWT]);

    const cerrarSesion = () => localStorage.removeItem('user');

    useNavigate();

  return sesion ? (
    <>
        <Avatar/>
        <Link style={style} href='/' onClick={cerrarSesion}>Cerrar Sesion</Link>
    </>
  )
  :
  (
    <>
        <Link style={style} to='/signUp'>Registrate</Link>
        <Link style={style}  to='/login'>Iniciar Sesion</Link>
    </>
  )
}

export default ButtonSesion
