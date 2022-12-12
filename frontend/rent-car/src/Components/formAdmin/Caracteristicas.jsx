import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Field, FieldArray } from 'formik'
import { useContext } from 'react';
import { Context } from '../../Contexts/CategoryContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Caracteristicas = (props) => {
    const [caracteristicas, setCaracteristicas] = useState([])
    const {renderizarCaracteristicas} = useContext(Context)
    const [caracteristicaSelected] = useState('')


    const caracteristicasToBase = []
    caracteristicasToBase.push({
      id:caracteristicaSelected
    })
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
          console.log(error)
        }
      );

    }, [renderizarCaracteristicas,caracteristicaSelected]);
    
  return (
    <>
      <FieldArray name='caracteristicas'>
        {
          (arrayHelpers) => {
            return (
              caracteristicas?.map((item)=> (
                <label key={item.id}  >
                  <Field 
                    type='checkbox'
                    name='caracteristicas'
                    value={JSON.stringify({id:item.id.toString()})}
                  />
                  <FontAwesomeIcon icon={item.icono} style={{'color':'var(--bottonForm)','marginRight':'5px','marginLeft':'5px'}} />
                  {item.nombre}
                </label>
            ))
            )
          }
        }
      </FieldArray>
    </>

  )
}

export default Caracteristicas