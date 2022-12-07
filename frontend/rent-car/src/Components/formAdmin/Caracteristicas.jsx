import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Field } from 'formik'
import { useContext } from 'react';
import { Context } from '../../Contexts/CategoryContextProvider';

const Caracteristicas = () => {
    const [caracteristicas, setCaracteristicas] = useState([])
    const {renderizarCaracteristicas} = useContext(Context)
    


    useEffect(() => {
      const JWT = localStorage.getItem('user')
      const baseUrl = 'http://localhost:8080/caracteristicas'
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
            setCaracteristicas(result);
        },
        (error) => {
          console.log(error);
        }
      );
      
    }, [renderizarCaracteristicas]);

  return (
    <>
      {
        caracteristicas?.map(item => (
          <label key={item.id}>
            <Field type='checkbox' name='checkedCaracteriscticas' value={item.id.toString()}/>
            {item.nombre}
          </label>
        ))
      }
    </>

  )
}

export default Caracteristicas