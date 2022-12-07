import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import { useState } from 'react'


const AgregarIcono = () => {
    const [nombre,setNombre] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("se hizo click");
        setNombre()

    }
  return (
    <form onClick={handleSubmit}>
        <button>HOla</button>
    </form>
  )
}

export default AgregarIcono