import * as React from 'react';
import './galeriaImagenes.css';
import { Popover,} from '@mui/material';
import { useState } from 'react';
import SwipeableTextMobileStepper from './carouselImageFade'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext} from 'react'
import { useEffect} from 'react'
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
        
        <div className='gridImageItem'  id='item1'> <img src = {itemData[0].producto.imagen} alt={itemData[1].title}/></div>
        <div className='gridImageItem' id='item2'> <img src={itemData[2].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item3' > <img src={itemData[0].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item4'> <img src={itemData[1].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item5'> 
          
        <img src={itemData[1].producto.imagen} alt={itemData[1].title}></img>
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
        anchorEl={document.body}
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
    "id": 1,
    "category":"Lujosos",
    "producto":{
        "imagen":"https://phantom-marca.unidadeditorial.es/e634ae888f7e9edb05cf55983c798355/f/webp/assets/multimedia/imagenes/2021/08/23/16297130820939.jpg",
        "title": "Alfa Romeo Giulietta",
        "description":"Modelo 2018, a gasolina, un auto lujoso para disfrutar.",
        "location":"Rosario, Santa Fe, Argentina"
    }
},

{
    "id": 2,
    "category":"SUV",
    "producto":{
        "title":"Jeep Grand Wagoneer",
        "imagen":"https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
        "description":"Modelo 2021, una SUV para ideal para las sierras.",
        "location":" La Cumbrecita, Cordoba, Argentina"
    }
},
{"id": 3,
"category":"Familiar",
"producto":{
    "title":"Volkswagen Vento",
    "imagen":"https://cdn.motor1.com/images/mgl/48x8Y/s3/hennessey-venom-f5.webp",
    "description":"Modelo 2020, un sedan con un gran habitaculo.",
    "location":" La Plata, Buenos Aires, Argentina"
}}
];
export default ImageGridGallery;