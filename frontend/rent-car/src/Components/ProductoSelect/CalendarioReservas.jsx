import { DateRange } from "react-date-range";
import {React, useState} from 'react'
import './bloqueReserva.css'

const CalendarioReservas = () => {
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState('10:00');
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const fechaInicial = new Date();
  return (
    <div>
        <DateRange
         editableDateInputs={true}
         onChange={item => setDate([item.selection])}
         moveRangeOnFirstSelection={false}
          ranges={date}
          months={2}
          className={'date-range'}
          direction={'horizontal'}
          minDate={fechaInicial}/>
    </div>
  )
}

export default CalendarioReservas