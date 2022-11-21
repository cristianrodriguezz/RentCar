import  Avatar  from './Avatar';
import React, { useState , useEffect} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import '../Header/buttonSesion.css'

const ButtonSesion = (props) => {
    
    const JWT = () => localStorage.getItem('user')

    const navigate = useNavigate();

    const [sesion, setSesion] = useState(false);

    useEffect(() => {
      setSesion(JWT())
    }, [sesion])


    function cerrarSesion(){
      const cerrar = window.confirm("¿Desea cerrar sesión?");
      if (cerrar){
      localStorage.removeItem('user');
      setSesion(cerrar)
      } 
    }

  return sesion ? (
    <>
        <Avatar/>
        <motion.button
        className='buttonSesion'
        onClick={cerrarSesion} 
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,2.2,1] } }
        >
        Cerrar sesion
        </motion.button>
    </>
  )
  :
  (
    <>
        <Link
        to='/signup'>
        <motion.button
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,2.2,1] } }
        className='buttonSesion'
        >
          Registrarse 
        </motion.button>
        </Link>
        <Link
        to='/login'>
        <motion.button
        transition={{ duration: 0.2 }}
        animate={ {scale:[1,2.2,1] } }
        className='buttonSesion'

        > 
          Iniciar sesion
        </motion.button>
        </Link>
    </>
  )
}

export default ButtonSesion
