import {React, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import './form.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import BasicTimePicker from './TimePicker';
import ciudades from '../../ciudades.json'
const Form = () => { 
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState('10:00');
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className='form-container'>
      <div className='form'>
      <div className='formSearchInput'>
      <FontAwesomeIcon icon={faMagnifyingGlass}className="icons" />
      <select name='ciudades' className='searchCity'>
      {ciudades?.map(elemento=>(
         <option key={elemento.id} value={elemento.id}>{elemento.ciudad} </option> 
      ))} 
      </select>
      </div>
      <div className='formSearchInput'>
      <FontAwesomeIcon icon={faCalendarDays} className="icons"/>
      <span onClick={()=>setOpenDate(!openDate)} className='formSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to
                                                                             ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
      {openDate && <DateRange
         editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
         ranges={date}
         className="date"
        />}
      </div>
      <div className='formSearchInput'>
      <BasicTimePicker/>
      </div>
      <button className='buttonForm'>Search</button>
    </div>
    </div>

  )
}

export default Form
