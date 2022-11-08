import React, { useState } from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'
import { useEffect } from 'react';

const ListadoProducto = () => {

    const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);
    const {filtroProductoPorId,setFiltroProductoPorId} = useContext(Context);
    
    const [response, setProductosRenderizados] = useState("http://localhost:8080/productos")

    const Response = useFetch(response);
    
    useEffect(() => {
        if (filtroProductoPorCategoria){
          setProductosRenderizados(`http://localhost:8080/productos/category/${filtroProductoPorCategoria}`)
        }else if(filtroProductoPorId){
          setProductosRenderizados(`http://localhost:8080/productos/category/${filtroProductoPorId}`)
        }

    }, [filtroProductoPorCategoria,filtroProductoPorId]);

    

    
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
              id={item.id}
              />
              )) :
              Response
        }
        
        </div>
    );
  }


export default ListadoProducto
