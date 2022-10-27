import React from 'react'
import './listado.css'
import Item from '../Item/Item'

const Listado = (props) => {
  return (
    <div className='container' style={{'display':'flex','flexWrap':'wrap', 'gap':'15px','justifyContent':'center'}}>
        {
            props.data?.map(producto=>
            <Item
            imagen={producto.producto.imagen}
            category={producto.category}
            title={producto.producto.title}
            key={producto.id}
            description={producto.producto.description}
            location={producto.producto.location}
            />
            )
        }
    </div>
  )
}

export default Listado
