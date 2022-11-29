import {React, useState, useRef, useContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import './form.scss'
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import useFetch from '../../Utils/useFetch';
import { Context } from '../../Contexts/CategoryContextProvider';
import CalendarOne from './CalendarOne'

const Form = () => { 
    const [openDate, setOpenDate] = useState(false)
    const opcion = useRef(null);
    const {setFiltroPorCiudad} = useContext(Context);

    const handleClick = () => {
      setFiltroPorCiudad(opcion.current.value)
    }
    

    const Response = useFetch("http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/ciudades");

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className='form-container'>
      <h2>Busca las últimas ofertas en Autos</h2>
      <div className='form'>
      <div className='formSearchInput'>
      <select ref={opcion}  name='ciudades' className='searchCity'>
        <option hidden selected>Buscar por ciudad</option>
        {Array.isArray(Response)
        ?
        Response.map(elemento=>(
           <option  key={elemento.id} value={elemento.id}>{elemento.pais} {elemento.nombre} </option> 
        ))
        :
        Response
    } 
      </select>
      </div>
      <CalendarOne/>
      {/* <BasicTimePicker/>*/}
      <button className='buttonForm' onClick={handleClick} >Search</button>
    </div>
    </div>

  )
}

export default Form
