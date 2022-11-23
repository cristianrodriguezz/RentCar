import React from 'react'
import './footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import RedesSociales from '../redesSociales/RedesSociales';

const Footer = () => {
  return (
    <footer >
        <div className='copyright'>
            <CopyrightIcon/> 2022 RENT-CAR
        </div>
        <RedesSociales/>
        
    </footer>
  )
}

export default Footer