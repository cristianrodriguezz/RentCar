import React from 'react'
import { useEffect, useState } from 'react';
import ItemProducto from '../Item/ItemProducto';
import Loading from '../Loading/Loading'

const ListadoProducto = () => {

    const Response = useFetch('http://localhost:8080/productos');
    return (

      <div>
        {
          Array.isArray(Response) ?
            Response.map(item=>(
              <ItemProducto
              key={item.id}
              imagen={'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg'}
              category={item.categoria.titulo}
              title={item.nombre}
              description={item.descripcion}
              price={item.precio}
              />
              )) :
              <Response />
        }

        </div>
    );
  }
}

export default ListadoProducto
