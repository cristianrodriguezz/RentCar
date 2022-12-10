import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'
import { postCaracteristica } from '../../Utils/post'


const AgregarIcono = () => {
    const [nombre,setNombre] = useState('')
    const [icono,setIcono] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [aceptMessage, setAceptMessage] = useState('')
    const JWT = JSON.parse(localStorage.getItem('user'))
    const {renderizarCaracteristicas,setRenderizarCaracteristicas} = useContext(Context)

    useEffect(() => {
        
    }, [renderizarCaracteristicas]);

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const data = {
          nombre,
          icono
        }
        if(!data.nombre || !data.icono){
          setErrorMessage("Tiene que contener datos")
          setTimeout(() => {
            setErrorMessage(null)
          }
          ,5000)
        }else{
          try {
            const response = await postCaracteristica(data,JWT)
            console.log(response);
            setAceptMessage("Se realizó con éxito")
            setRenderizarCaracteristicas(!renderizarCaracteristicas)
            setTimeout(() => {
              setAceptMessage(null)
            }
            ,5000)
          }catch (error) {
            setErrorMessage(error.response.data)
            console.log(error.response.data)
            setTimeout(() => {
              setErrorMessage(null)
            }
            ,5000)
          }
        }
      }
  return (
    <div>
      <h3>Agregar características</h3>        
        <p className='error'>{errorMessage}</p>
        <p className='accept'>{aceptMessage}</p>
      <form className='agregarCaracteristica' >
        <label>
          Nombre
          <input onChange={(event) => {setNombre(event.target.value);}} placeholder="GPS" className='input'/>
        </label>
        <label>
          Ícono
          <input onChange={(event) => {setIcono(event.target.value);}} placeholder="fa-GPS" className='input'/>
        </label>
          <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  )
}

export default AgregarIcono