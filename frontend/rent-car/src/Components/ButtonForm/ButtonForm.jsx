import React from 'react'
import './buttonForm.css'


const ButtonForm = ({children}) => {
    
    const style = {
        "padding":"8px",
        "border":"none",
        "backgroundColor":"var(--bottonForm)",
        "borderRadius":"5px",
        "color":"white",
    }

  return (
    <button className='buttonFormulario'>{children}</button>
  )
}

export default ButtonForm