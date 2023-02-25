import {React, useRef, useContext} from 'react'
import './form.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useFetch from '../../Utils/useFetch';
import { Context } from '../../Contexts/CategoryContextProvider';
import CalendarOne from './CalendarOne'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = () => { 
    const opcion = useRef(null);
    const {setFiltroPorCiudad} = useContext(Context);
    const {reestablecerFiltros, setReestablecerFiltros} = useContext(Context)
    const {search,setSearch} = useContext(Context)


    const handleClick = () => {
      if(opcion.current.value !== "DEFAULT"){
        setFiltroPorCiudad(opcion.current.value)
        setSearch(!search)
      }
    }
    const handleClickResetForm = () => {
      setReestablecerFiltros(!reestablecerFiltros)
    }

    const Response = useFetch("http://186.123.128.63:8080/RentCar/ciudades");

  return (
    <div className='form-container'>
      <h2>Busca las últimas ofertas en Autos</h2>
      <div className='form'>
      <div className='formSearchInput'>
      <select ref={opcion}  name='ciudades' className='searchCity' defaultValue='DEFAULT'>
        <option value='DEFAULT' disabled hidden>Buscar por ciudad</option>
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
      <button className='buttonForm' onClick={handleClick} ><FontAwesomeIcon icon="fa-magnifying-glass" /></button>
      <button className='buttonForm' onClick={handleClickResetForm}><FontAwesomeIcon icon="fa-filter-circle-xmark" /></button>
    </div>
    </div>

  )
}

export default Form
