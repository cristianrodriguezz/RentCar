import React, { useState } from 'react'

const AgregarImagenes = ({ onAction }) => {
    const [imagenes, setImagenes] = useState([])
    const [imagen, setImagen] = useState('')

    

    const handleClick = (event) => {
        event.preventDefault()
        console.log("click");
        setImagenes([...imagenes,imagen]) 
    }
    console.log(imagenes)
  return (
    <div>
    <h3>Agregar imágenes</h3>
    <form >
      <label>
        Imágenes
        <input onChange={(event) => {setImagen(event.target.value);}} placeholder="GPS" className='input'/>
      </label>
        <button onClick={onAction}>+</button>
    </form>
  </div>
  )
}

export default AgregarImagenes