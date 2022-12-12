import { useFormikContext } from 'formik'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const AgregarImagenes = () => {
    const [imagenes,setImagenes] = useState([]) 
    const [imagen, setImagen] = useState({})
    const ref = useRef()
    const { values } = useFormikContext();

    useEffect(() => {
      values.imagenes = imagenes
    }, [imagenes,values]);

    const handleClick = (event) => {
        event.preventDefault()
        ref.current.value = ''
        const imageToBase = {
            url: imagen,
            esPrincipal: imagenes.length === 0 ? true : false,
            titulo: "Auto"
        } 
        setImagenes([...imagenes,imageToBase])
        
    }

  return (
    <div>
    <h3>Agregar imágenes</h3>
    <form className='agregarImagenes' >
      <label>
        <p>Imágenes [{imagenes.length}]</p>

        <input onChange={(event) => {setImagen(event.target.value);}} placeholder="GPS" className='input' ref={ref} name={'imagenes'}/>
      </label>
        <button onClick={handleClick}>+</button>
    </form>
  </div>
  )
}

export default AgregarImagenes