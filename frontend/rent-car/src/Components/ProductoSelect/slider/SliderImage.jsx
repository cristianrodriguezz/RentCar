
import React from 'react'
import Slider from 'react-slick'
import './slider.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';


const SliderImage = (props) => {

  const [active, setActive] = useState(1)


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3000,
      arrows:false,
      className: 'sliderr',
      beforeChange: (next) => setActive(next)
}

  return (
    <>
    <Slider {...settings}>
        {
          props.imagenes.imagenes?.map( item => 
          <div key={item.id}>
            <div className='imageSlaiderContainer' >
              <img src={item.url} alt={item.titulo} className='imagesSlider' ></img>
              
            </div>
          </div>
          )
        }
        
    </Slider>
    <span className='positionImage'>{active}/{props.imagenes.imagenes?.length}</span>
    </>
  )
}

export default SliderImage