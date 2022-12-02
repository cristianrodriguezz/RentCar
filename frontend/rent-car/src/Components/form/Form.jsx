import {React, useRef, useContext} from 'react'
import './form.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useFetch from '../../Utils/useFetch';
import { Context } from '../../Contexts/CategoryContextProvider';
import CalendarOne from './CalendarOne'

const Form = () => { 
    const opcion = useRef(null);
    const {setFiltroPorCiudad} = useContext(Context);

    const handleClick = () => {
      setFiltroPorCiudad(opcion.current.value)
    }

    const Response = useFetch("http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/ciudades");

  return (
    <div className='form-container'>
      <h2>Busca las últimas ofertas en Autos</h2>
      <div className='form'>
      <div className='formSearchInput'>
      <select ref={opcion}  name='ciudades' className='searchCity' defaultValue={'DEFAULT'}>
        <option value={'DEFAULT'} disabled hidden>Buscar por ciudad</option>
        {Array.isArray(Response)
        ?
        Response.map(elemento=>(
           <option  
            key={elemento.id}
            value={elemento.id}
            >
              {elemento.pais} {elemento.nombre}
            </option> 
        ))
        :
        Response
    } 
      </select>
      </div>
      <CalendarOne/>
      <button className='buttonForm' onClick={handleClick} >Search</button>
      
    </div>
    </div>

  )
}

export default Form
