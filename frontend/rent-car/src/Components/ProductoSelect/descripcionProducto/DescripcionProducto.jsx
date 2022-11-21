import React from 'react'
import './descripcionProducto.scss'

const DescripcionProducto = (props) => {

  return (
        <div className='descripcionContainer'>
            <h3>{props?.titulo}</h3> 
            <p>{props?.descripcion}</p>
        </div>
  )
}

export default DescripcionProducto