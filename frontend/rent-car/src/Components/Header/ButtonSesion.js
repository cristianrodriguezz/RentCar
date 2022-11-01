import  Avatar  from './Avatar';
import React, { useState , useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion'


const ButtonSesion = () => {
    const style = {
        'background': 'var(--bottonForm)',
        'boxShadow':' 0px 2px 4px rgba(0, 0, 0, 0.12)',
        'borderRadius': '5px',
        'border':'none',
        'padding':'8px',
        'cursor':'pointer'
    }
    const JWT = () => localStorage.getItem('user')

    const [sesion, setSesion] = useState(false);

    useEffect(() => {
      setSesion(JWT())
    }, [sesion]);


    function cerrarSesion(){
      const cerrar = window.confirm("¿Desea cerrar sesión?");
      if (cerrar){
      localStorage.removeItem('user');
      setSesion(cerrar)
      } 
    }
    useNavigate();

  return sesion ? (
    <>
        <Avatar/>
        <motion.a
        style={style}
        href="/" 
        onClick={cerrarSesion} 
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
        Cerrar sesion
        </motion.a>
    </>
  )
  :
  (
    <>
        <motion.a
        style={style}
        href="/signUp" 
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
        Registrarse
        </motion.a>
        <motion.a
        style={style}
        href="/login" 
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
          Iniciar sesion
        </motion.a>
    </>
  )
}

export default ButtonSesion
