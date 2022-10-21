import React from 'react'
import './style/header.css'


const Header = () => {
  return (
    <header className='header'>
        <>
          LOGOTIPO
        </>
        <ul className='listaMenu'>
                <li>Home</li>
                <li>Contacto</li>
                <li>Inicio de Sesion</li>
                <li>Cerrar Sesion</li>
        </ul>

    </header>
  )
}

export default Header