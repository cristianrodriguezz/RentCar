import React, { useState } from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'
import { useEffect } from 'react';

const ListadoProducto = () => {

     

    const [response, setProductosRenderizados] = useState("http://localhost:8080/productos")

    const Response = useFetch(response);
   
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
