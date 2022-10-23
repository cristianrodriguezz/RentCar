import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className='footer-page'>
        <div>
            copyrigth 2022 LOGOTIPO
        </div>
        <ul>
          <a href='/#'><FacebookOutlinedIcon/></a>
          <a href='/#'><TwitterIcon /></a>
          <a href='/#'><LinkedInIcon /></a>
          <a href='/#'><InstagramIcon /></a>
        </ul>
    </div>
  )
}

export default Footer