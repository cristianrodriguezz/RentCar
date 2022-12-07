import React from 'react'
import { Field } from 'formik'

const CargarImagenes = () => {
  return (
    <div>
        <Field 
            type='text' 
            id='cargarImagenes' 
            name='cargarImagenes'
            placeholder='Insertar https://'
            className='input'
        />
    </div>
  )
}

export default CargarImagenes