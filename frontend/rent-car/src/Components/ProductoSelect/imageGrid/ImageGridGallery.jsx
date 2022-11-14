import * as React from 'react';
import './galeriaImagenes.css';
import { Popover,} from '@mui/material';
import SwipeableTextMobileStepper from '../carouselImageFade'
import { Context }from '../../../Contexts/CategoryContextProvider'
import { useContext} from 'react'

const ImageGridGallery = (props) => {
  const {anchor, setAnchor} = useContext(Context);
  const openPopover = () => {
    setAnchor(true);
  };

  return (
    <div>

    <CarrouselFadeGallery anchor ={anchor}/>
      <div className='gridImageContainer'>
        
        <div className='gridImageItem'  id='item1'> <img src = {props.imagenes?.[0].url} alt={props.imagenes?.[0].nombre}/></div>
        <div className='gridImageItem' id='item2'> <img src={props.imagenes?.[1].url} alt={props.imagenes?.[1].nombre} /></div>
        <div className='gridImageItem'id='item3' > <img src={props.imagenes?.[2].url} alt={props.imagenes?.[2].nombre} /></div>
        <div className='gridImageItem'id='item4'> <img src={props.imagenes?.[3].url} alt={props.imagenes?.[3].nombre} /></div>
        <div className='gridImageItem'id='item5'> 
          
        <img src={props?.imagenes?.[4].url} alt={props?.imagenes?.[4].title}></img>
        <button style={{'backgroundColor':'var(--bottonForm)','color':'white'}} onClick={openPopover} >ver mas</button>
      </div>  

    </div>
    </div>
  );
}
const CarrouselFadeGallery = ({anchor}) => {
  return (
    <div>
      <Popover
        open={Boolean(anchor)}
        classes={{ paper: "MuiPopover-paper" }}
        anchorReference="anchorEl"
        anchorEl={document.documentElement}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{  
          vertical: 'top',
          horizontal: 'center',
        }}
        sx = {{
          bgcolor: '#686868'
        }}
      >
        <SwipeableTextMobileStepper/>
      </Popover>
    </div>
  );  

}
export default ImageGridGallery;