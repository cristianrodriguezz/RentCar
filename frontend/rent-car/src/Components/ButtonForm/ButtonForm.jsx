import React from 'react'
import './buttonForm.css'


const ButtonForm = ({children, tipo}) => {
    
  return (
    <button className='buttonFormulario' type={tipo}>{children}</button>
  )
}

export default ButtonForm