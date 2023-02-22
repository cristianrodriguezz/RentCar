import  Avatar  from './Avatar';
import React, { useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion'
import '../Header/buttonSesion.css'
import { useContext } from 'react';
import { Context } from "../../Contexts/CategoryContextProvider";
import { useRef } from 'react';

const ButtonSesion = (props) => {
    const {botonesHeader} = useContext(Context);
    const {sesions,setSesions} = useContext(Context);
    const botonInicio = useRef();
    const botonSignup = useRef();
    const rol = JSON.parse(sessionStorage.getItem('user'))?.authorities[0].authority
    const navigate = useNavigate();
    
    useEffect(() => {
      const JWT = sessionStorage.getItem('user')

      if (JWT){
        setSesions(true)
      } else if (!JWT){
        setSesions(false)
      }
    }, [setSesions]);

    useEffect(() => {
      if (botonesHeader === '/login'  && botonInicio.current  !== null) {
        botonInicio.current.classList.add('desaparecer')
        botonSignup.current.classList.remove('desaparecer')
      }else if (botonesHeader === '/signup' && botonSignup.current  !== null ){
        botonSignup.current.classList.add('desaparecer')
        botonInicio.current.classList.remove('desaparecer')
      }else if(botonSignup.current !== null && botonInicio.current !== null ){
        botonSignup.current.classList.remove('desaparecer')
        botonInicio.current.classList.remove('desaparecer')
      }
    }, [botonesHeader])


    const handleCerrarSesion = () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
        navigate('/')
        setSesions(false)
        window.scrollTo(0, 0);
    }
    const handleClick = () => {
      window.scrollTo(0, 0);
    }

  return sesions ? (
    <>
        {
          rol === "ROLE_ADMIN" 
          ?
          <Link to='/administracion' style={{'paddingRight':"25px"}}>Administración</Link>
          :
          null
        }
        <Avatar/>
        <motion.button
        className='buttonSesion'
        onClick={handleCerrarSesion} 
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
        onClick={handleClick}
        ref={botonSignup}
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
        onClick={handleClick}
        ref={botonInicio}
        > 
          Iniciar sesion
        </motion.button>
        </Link>
    </>
  )
}

export default ButtonSesion
