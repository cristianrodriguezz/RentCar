import React, { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'

const AgregarImagenes = () => {
    const {imagenes,setImagenes} = useContext(Context) 
    const [imagen, setImagen] = useState({})
    const ref = useRef()

    const handleClick = (event) => {
        event.preventDefault()
        console.log(event);
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
    <form >
      <label>
        Imágenes [{imagenes.length}]
        <input onChange={(event) => {setImagen(event.target.value);}} placeholder="GPS" className='input' ref={ref} name={'imagenes'}/>
      </label>
        <button onClick={handleClick}>+</button>
    </form>
  </div>
  )
}

export default AgregarImagenes