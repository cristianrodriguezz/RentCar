import React from 'react'
import ButtonSesion from './ButtonSesion'
import './header.css'


const Header = () => {
  return (
    <header>
      <>
        LOGOTIPO
      </>
      <ul>
        <li>Home</li>
        <li>Contacto</li>
        <ButtonSesion/>
      </ul>

    </header>
  )
}

export default Header