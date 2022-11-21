import { DateRange } from "react-date-range";
import {React, useState} from 'react'
import './bloqueReserva.scss'

const CalendarioReservas = (props) => {
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState('10:00');
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        },
      ]);
    const fechaInicial = new Date();
  return (
    <div className={`containerCalendarios ${props.selection}`}>
      <h2>{props.titulo}</h2>
        <DateRange
         editableDateInputs={true}
         onChange={item => setDate([item.selection])}
         moveRangeOnFirstSelection={false}
          ranges={date}
          months={1}
          className={'date-range1'}
          direction={'horizontal'}
          minDate={fechaInicial}/>
          <DateRange
         editableDateInputs={true}
         onChange={item => setDate([item.selection])}
         moveRangeOnFirstSelection={false}
          ranges={date}
          months={2}
          className={'date-range2'}
          direction={'horizontal'}
          minDate={fechaInicial}/>
    </div>
  )
}

export default CalendarioReservas