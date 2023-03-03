import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const Ciudades = (formikProps) => {
  const [ciudadesApi, setCiudadesApi] = useState([])

  useEffect(() => {
    const JWT = localStorage.getItem('user')
    const config = {
      method: 'GET',
      headers: {
        authorization: JWT
      }
    }
    fetch('https://falling-wind-1167.fly.dev/ciudades/',config)
    .then((res) => res.json())
    .then(
      (result) => {
        setCiudadesApi(result);
      },
      (error) => {

      }
    );

  }, []);

  return (
    <>
    <option selected disabled hidden >Seleccione la ciudad</option>
      {
        ciudadesApi?.map(item => (
          <option value={item.id} key={item.id} name={'ciudad.id'} >
            {item.pais}, {item.nombre}
          </option>
        ))

      }
    </>
  )
}

export default Ciudades