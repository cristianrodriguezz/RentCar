import React from 'react'
import { useEffect, useState } from 'react';
import ItemProducto from '../Item/ItemProducto';
import Loading from '../Loading/Loading'
import './listadoProducto.css'

const ListadoProducto = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/productos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading/>;
  } else {
    return (
      <div className='listadoProducto'>
          {items.map(item=>(
          <ItemProducto
          key={item.id}
          imagen={'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg'}
          category={item.categoria.titulo}
          title={item.nombre}
          description={item.descripcion}
          price={item.precio}
          />
          ))}
      </div>
    );
  }
}

export default ListadoProducto
