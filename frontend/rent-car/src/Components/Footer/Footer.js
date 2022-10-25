import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <footer >
        <div>
            copyrigth 2022 LOGOTIPO
        </div>
        <nav>
          <a href='/#'><FacebookOutlinedIcon/></a>
          <a href='/#'><TwitterIcon /></a>
          <a href='/#'><LinkedInIcon /></a>
          <a href='/#'><InstagramIcon /></a>
        </nav>
    </footer>
  )
}

export default Footer