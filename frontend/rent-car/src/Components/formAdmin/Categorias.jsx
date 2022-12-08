import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    

    useEffect(() => {
      const JWT = localStorage.getItem('user')
      const baseUrl = 'http://localhost:8080/categorias/'
      const config = {
        method: 'GET',
        headers: {
          authorization: JWT
        }
      }
      fetch(baseUrl,config)
      .then((res) => res.json())
      .then(
        (result) => {
            setCategorias(result);
        },
        (error) => {
  
        }
      );
      
    }, []);

  return (
    <>
        <option selected disabled hidden >Seleccione la categoria</option>
        {
        categorias?.map(item => (
            <option value={item.id} key={item.id} name={'categoria'} id='categoria'>
              {item.titulo}
            </option>
        ))
      }
    </>
  )
}

export default Categorias