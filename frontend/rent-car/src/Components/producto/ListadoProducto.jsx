import React, { useState } from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'
import { useEffect } from 'react';

const ListadoProducto = () => {
  
  const HandleClick = () =>{
    setProductosRenderizados(useFetch(`http://localhost:8080/productos/${filtroProductoPorId}`))
  } 
    const {filtroProductoPorCategoria} = useContext(Context);
    const {filtroProductoPorId} = useContext(Context);
    
    const [response, setProductosRenderizados] = useState("http://localhost:8080/productos")

    const Response = useFetch(response);
    
    useEffect(() => {
        if (filtroProductoPorCategoria){
          setProductosRenderizados(`http://localhost:8080/productos/category/${filtroProductoPorCategoria}`)
        }

    }, [filtroProductoPorCategoria]);

    

    
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
              numeroProducto= {item.id}
              button={HandleClick}
              id={item.id}
              />
              )) :
              Response
        }
        
        </div>
    );
  }


export default ListadoProducto
