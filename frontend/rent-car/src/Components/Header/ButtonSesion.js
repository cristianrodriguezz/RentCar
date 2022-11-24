import  Avatar  from './Avatar';
import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import '../Header/buttonSesion.css'
import { useContext } from 'react';
import { Context } from "../../Contexts/CategoryContextProvider";
import { useRef } from 'react';

const ButtonSesion = (props) => {
    
    const JWT = () => localStorage.getItem('user')

    const {botonesHeader} = useContext(Context);
    const {sesions,setSesions} = useContext(Context);

    const [token,setToken] = useState('')

    const botonInicio = useRef();
    const botonSignup = useRef();


    const [sesion, setSesion] = useState(false);

    console.log(botonInicio);

    useEffect(() => {
      if (sesions !== null){
        setSesion(true)
      } else if (sesions === 'nouser') {
        setSesion(false)
      }
      if (botonesHeader === '/login'  && botonInicio.current  !== null) {
        botonInicio.current.classList.toggle('desaparecer')
        botonSignup.current.classList.remove('desaparecer')
      }else if (botonesHeader === '/signup' && botonSignup.current  !== null ){
        botonSignup.current.classList.toggle('desaparecer')
        botonInicio.current.classList.remove('desaparecer')
      }else if(botonSignup.current !== null && botonInicio.current !== null ){
        botonSignup.current.classList.remove('desaparecer')
        botonInicio.current.classList.remove('desaparecer')
      }
    }, [sesions,botonesHeader,sesion,setSesion])


    function cerrarSesion(){
        localStorage.removeItem('user')
        setSesions(localStorage.setItem('nouser','nouser'))
        setSesion(false)
    }
    const handleClick = () => {
      window.scrollTo(0, 0);
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
