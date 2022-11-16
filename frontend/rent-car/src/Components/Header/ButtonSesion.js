import  Avatar  from './Avatar';
import React, { useState , useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion'
import '../Header/buttonSesion.css'

const ButtonSesion = () => {
    
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
        <motion.button
        className='buttonSesion'
        onClick={cerrarSesion} 
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
        Cerrar sesion
        </motion.button>
    </>
  )
  :
  (
    <>
        <motion.div
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
          <Link
          className='buttonSesion'
          to="/signUp" 
          >
          Registrarse
          </Link>
        </motion.div>
        <motion.div
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,1.2,1] } }
        >
          <Link
          className='buttonSesion'
          to="/login" 
          transition={{ duration: 0.2 }}
          animate={ {scale:[1,1.2,1] } }
          >
            Iniciar sesion
          </Link>
        </motion.div>
    </>
  )
}

export default ButtonSesion
