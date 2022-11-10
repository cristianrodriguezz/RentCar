import React from 'react'
import './itemProducto.scss';
import {useNavigate } from "react-router-dom";
const ItemProducto = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/productos/${props.id}`);
  }
  return (
    <div  className='containerCar'>
      <div className='containerImageCar'>
        <img src={props.image} alt="Auto"></img>
      </div>
      <div className='styles'>  
          <p>Categoria: {props.category}</p>
          <h3>
              {props.title}
          </h3>
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
