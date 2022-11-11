<<<<<<< HEAD
import * as React from 'react';
import './galeriaImagenes.css';
import { Popover,} from '@mui/material';
import { useState } from 'react';
import SwipeableTextMobileStepper from './carouselImageFade'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext} from 'react'
import useFetch from '../../Utils/useFetch';
import { useParams } from 'react-router';

const ImageGridGallery = (props) => {
  const {anchor, setAnchor} = useContext(Context);
  const openPopover = () => {
    setAnchor(true);
  };
  const params = useParams()
  const Response = useFetch(`http://localhost:8080/productos/${params.id}`)

  return (
    <div>
    <CarrouselFadeGallery anchor ={anchor}/>
      <div className='gridImageContainer'>
        
        <div className='gridImageItem'  id='item1'> <img src = {Response?.imagenes[0]?.url} alt={itemData[1].title} loading/></div>
        <div className='gridImageItem' id='item2'> <img src={itemData[1].img} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item3' > <img src={itemData[1].img} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item4'> <img src={itemData[1].img} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item5' >
          
        <img src={itemData[1].img} alt={itemData[1].title}></img>
        <button onClick={openPopover} >ver mas</button>
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
        anchorReference="anchorPosition"
        anchorPosition={{ top: 375, left: 750 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'  
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats'
  },
];
export default ImageGridGallery;