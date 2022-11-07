import React from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'


const ListadoProducto = () => {

    const Response = useFetch('http://localhost:8080/productos');
    
    

    return (

      <div>
        {
          Array.isArray(Response) ?
            Response.map(item=>(
              <ItemProducto
              key={item.id}
              imagen={item.imagenes[0].url}
              category={item.categoria.titulo}
              title={item.nombre}
              description={item.descripcion}
              price={item.precio}
              />
              )) :
              Response
        }
        
        </div>
    );
  }


export default ListadoProducto
