import React from 'react'
import '../style/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import '../style/responsive.css'


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
        <MenuIcon className='hamburger'/>

    </header>
  )
}

export default Header