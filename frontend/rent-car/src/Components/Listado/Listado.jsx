import React from 'react'
import Item from '../Item/Item'

const Listado = (props) => {
  return (
    <div className='container'>
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