import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer >
        <div className='copyright'>
            <CopyrightIcon/> 2022 LOGOTIPO
        </div>
        <nav>
          <a href='https://es-la.facebook.com'><FacebookOutlinedIcon/></a>
          <a href='https://twitter.com/'><TwitterIcon /></a>
          <a href='https://www.linkedin.com/'><LinkedInIcon /></a>
          <a href='https://www.instagram.com/'><InstagramIcon /></a>
        </nav>
    </footer>
  )
}

export default Footer