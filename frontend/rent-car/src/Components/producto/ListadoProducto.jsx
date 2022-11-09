import React, { useState } from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'
import { useEffect } from 'react';

const ListadoProducto = () => {
  

  const [idProducto, setIdProducto] = useState(null)
  const [vista, setVista] = useState("/productos")

  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);
    
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
              id = {item.id}
              key={item.id}
              imagen={item.imagenes[0].url}
              category={item.categoria.titulo}
              title={item.nombre}
              description={item.descripcion}
              price={item.precio}
              numeroProducto= {item.id}
              />
              )) :
              Response
        }
        
        </div>
    );
  }


export default ListadoProducto
