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

    const botonInicio = useRef();
    const botonSignup = useRef();

    const {botonesHeader} = useContext(Context);

    const [sesion, setSesion] = useState(false);

    console.log(botonInicio);

    useEffect(() => {

      setSesion(JWT())

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
    }, [sesion,botonesHeader])


    function cerrarSesion(){
      const cerrar = window.confirm("¿Desea cerrar sesión?");
      if (cerrar){
      localStorage.removeItem('user');
      setSesion(cerrar)
      } 
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
