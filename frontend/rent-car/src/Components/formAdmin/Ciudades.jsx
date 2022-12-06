import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const Ciudades = () => {

  const [ciudades, setCiudades] = useState([])


  useEffect(() => {
    const JWT = localStorage.getItem('user')
    const config = {
      method: 'GET',
      headers: {
        authorization: JWT
      }
    }
    fetch('http://localhost:8080/ciudades/',config)
    .then((res) => res.json())
    .then(
      (result) => {
        setCiudades(result);
      },
      (error) => {

      }
    );
    
  }, []);




  return (
    <>
    <option selected disabled hidden >Seleccione la ciudad</option>
      {
        ciudades?.map(item => (
      <option value={item.id} key={item.id}>
        {item.pais}, {item.nombre}
      </option>
        ))

      }
    </>
  )
}

export default Ciudades