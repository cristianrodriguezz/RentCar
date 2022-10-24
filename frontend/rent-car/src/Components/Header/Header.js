import React from 'react'
import ButtonSesion from './ButtonSesion'
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useRef } from 'react'

const Header = () => {
  const navRef = useRef();

  //const showNavbar = () => {
  //  navRef.current.classList.toggle("responsive_nav");
  //}

  return (
    <div className='header'>
      <>
        LOGOTIPO
      </>
      <ul ref={navRef}>
        <li>Home</li>
        <li>Contacto</li>
        <ButtonSesion/>
        <button >
          <FaTimes/>
        </button>
      </ul>
      <button>
        <FaBars/>
      </button>

    </div>
  )
}

export default Header
