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
        
        <div className='gridImageItem'  id='item1'> <img src = {itemData[2].producto.imagen} alt={itemData[1].title}/></div>
        <div className='gridImageItem' id='item2'> <img src={itemData[2].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item3' > <img src={itemData[1].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item4'> <img src={itemData[1].producto.imagen} alt={itemData[1].title} /></div>
        <div className='gridImageItem'id='item5'> 
          
        <img src={itemData[1].producto.imagen} alt={itemData[1].title}></img>
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
    "id": 1,
    "category":"Lujosos",
    "producto":{
        "imagen":"https://cdn.imagin.studio/getImage?&customer=arfranciscogiulianicompany&make=alfa-romeo&modelFamily=giulietta&modelRange=124-spider&modelVariant=ca&modelYear=2018&powerTrain=petrol&bodySize=2&paintId=pspc0036&angle=01",
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
        "imagen":"https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/13713-2022-jeep-grand-wagoneer",
        "description":"Modelo 2021, una SUV para ideal para las sierras.",
        "location":" La Cumbrecita, Cordoba, Argentina"
    }
},
{"id": 3,
"category":"Familiar",
"producto":{
    "title":"Volkswagen Vento",
    "imagen":"https://la-motorbit-media.s3.amazonaws.com/2016/10/volkswagen-vento-allstar-2017-2.jpg",
    "description":"Modelo 2020, un sedan con un gran habitaculo.",
    "location":" La Plata, Buenos Aires, Argentina"
}}
];
export default ImageGridGallery;