import { useFormikContext } from 'formik';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    const { values } = useFormikContext();

    

    useEffect(() => {
      const JWT = localStorage.getItem('user')
      const baseUrl = 'http://186.123.128.63:8080/RentCar/categorias/'
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
            <option value={item.id} key={item.id} name={'categoria.id'} id='categoria' >
              {item.titulo}
            </option>
        ))
      }
    </>
  )
}

export default Categorias