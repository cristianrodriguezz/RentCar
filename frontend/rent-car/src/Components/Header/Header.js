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
        <Link to={'/'} style={{color:"white"}}>LOGOTIPO</Link>
      </>
      <nav ref={navRef}>
        <ButtonSesion />
        <div className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
        </div>
      </nav>
      <div className='nav-btn responsive_nav' onClick={showNavbar}>
        <FaBars/>
      </div>
      
    </header>
    
  )
}

export default Header
