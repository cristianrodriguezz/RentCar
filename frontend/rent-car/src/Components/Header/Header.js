import React from 'react'
import ButtonSesion from './ButtonSesion'
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

 
  return (
    <header>
      <>
        <Link to={'/'} style={{color:"white"}}><div style={{'width':'120px'}}><img src={logo} alt='logo' style={{'width':'100%','marginLeft': '40px'}}></img></div></Link>
      </>
      <nav ref={navRef}>
        <div className='containerBurgerTop responsive_nav'>
          <span>MENÚ</span>
        </div>
        
        <ButtonSesion />
        <div className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
        </div>
      </nav>
      <div className='nav-btn responsive_nav' onClick={showNavbar}>
        <FaBars style={{'marginRight':'25px'}}/>
      </div>
      
    </header>
    
  )
}

export default Header
