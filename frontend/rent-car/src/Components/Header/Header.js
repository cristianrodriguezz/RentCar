import React from 'react'
import ButtonSesion from './ButtonSesion'
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <>
        LOGOTIPO
      </>
      <nav ref={navRef}>
        <Link to='/'>Home</Link>
        <Link to='/contacto'>Contacto</Link>
        <ButtonSesion/>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn responsive_nav' onClick={showNavbar}>
        <FaBars/>
      </button>
      
    </header>
    
  )
}

export default Header
