import {React, useState, useRef, useContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import './form.scss'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import useFetch from '../../Utils/useFetch';
import { Context } from '../../Contexts/CategoryContextProvider';


const Form = () => { 
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState('10:00');
    const opcion = useRef(null);
    const {setFiltroPorCiudad} = useContext(Context);

    const handleClick = () => {
      console.log(opcion.current.value);
      setFiltroPorCiudad(opcion.current.value)
    }
    

    const Response = useFetch("http://localhost:8080/ciudades");

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
      <div className='formSearchInput'>
      
      <span onClick={()=>setOpenDate(!openDate)} className='formSearchCalendar'><FontAwesomeIcon icon={faCalendarDays} className="icons" style={{"paddingRight":"10px"}}/>
                                                                            {`${format(date[0].startDate, "dd/MM/yyyy")} to
                                                                             ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
      {openDate && <DateRange
         editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
         ranges={date}
         className="date"
        />}
      </div>
      {/* <BasicTimePicker/>*/}
      <button className='buttonForm' onClick={handleClick} >Search</button>
    </div>
    </div>

  )
}

export default Form
