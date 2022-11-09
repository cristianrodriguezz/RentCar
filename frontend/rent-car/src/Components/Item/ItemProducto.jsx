import React from 'react'
import './itemProducto.css';
import {useNavigate } from "react-router-dom";
const ItemProducto = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/productos/${props.id}`);
  }
  return (
    <div  className='contenedor'>
      <div style={{'width':'344px','display':'flex','alignItems':'center', 'justifyContent':'center'}}>
        <img src={props.imagen}alt="Car" style={{'width':'95%','margin':'auto', 'height': '95%'}} />
      </div>
      <div className='styles'>  
          <p>{props.category}</p>
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
