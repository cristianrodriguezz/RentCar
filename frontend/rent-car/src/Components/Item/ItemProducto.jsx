import React from 'react'
import './itemProducto.scss';
import {useNavigate } from "react-router-dom";


const ItemProducto = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/productos/${props.id}`);
      window.scrollTo(0, 0);
  }

  const style = {
    backgroundImage: `url(${props.image})`
  }

  return (
    <div  className='containerCar'>
        <div className='containerImageCar' style={style} ></div>
      <div className='styles'>  
          <p>Categoria: {props.category}</p>
          <h3>
              {props.title}
          </h3>
          <div>
            {props.icon}
          </div>
          <p>
              {props.description}
          </p>
          <p>
            {props.price}
          </p>
          <button className='buttonStyle' onClick={handleClick}>Ver detalle</button>
      </div>
    </div>
  )
}

export default ItemProducto
