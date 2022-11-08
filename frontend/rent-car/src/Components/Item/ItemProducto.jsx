import React from 'react'
import { useContext } from 'react';
import { Context } from '../../Contexts/CategoryContextProvider';
import './itemProducto.css'
import useFetch from '../../Utils/useFetch'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'




const ItemProducto = (props) => {

  const handleClick = () =>{
    setFiltroProductoPorId(props.numeroProducto);
    props.button();
  }

  const {filtroProductoPorId, setFiltroProductoPorId} = useContext(Context)

  

  const {filtroProductoPorId,setfiltroProductoPorId} = useContext(Context);

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
          <Link className='buttonStyle'  onClick={ () => handleClick()}>Ver detalle</Link>
          <button className='buttonStyle' onClick={ () => setfiltroProductoPorId(props.id)} >Ver detalle</button>
      </div>
    </div>
  )
}

export default ItemProducto
