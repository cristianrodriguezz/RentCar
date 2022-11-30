import { DateRange } from "react-date-range";
import {React, useState} from 'react'
import './bloqueReserva.scss'
import { useContext } from "react";
import { Context } from "../../../Contexts/CategoryContextProvider";
import { useEffect } from "react";
import format from 'date-fns/format'
import { useRef } from "react";
import Box from '@mui/material/Box';

const CalendarioReservas = (props) => {

    const {fechasPersistencia , setFechasPersistencia } = useContext(Context)

  
    const [range, setRange] = useState(
        [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
          }
        ]
      )

    const onChangeCalendar = (item) => {
        console.log(item);
        setRange([item.selection])
        setFechasPersistencia([item.selection])
    }

    useEffect(() => {
      if (fechasPersistencia) {
          setRange(fechasPersistencia)
      }
    }, [fechasPersistencia])

    const [BookinRange, setBookinRange] = useState({
      checkin: '',
      checkout: ''
    })

    useEffect(() => {
      if (fechasPersistencia) {
          setBookinRange({
              checkin: format(range[0].startDate, "dd/MM/yyyy"),
              checkout: format(range[0].endDate, "dd/MM/yyyy")
          }
          )
      }
  }, [fechasPersistencia])

  const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

  return (
    <div ref={refOne} className={`containerCalendarios ${props.selection}`}>
      <h2>{props.titulo}</h2>
        <DateRange
         editableDateInputs={true}
         onChange={item => onChangeCalendar(item)}
         moveRangeOnFirstSelection={false} 
          ranges={range}
          months={1}
          className={'date-range1'}
          direction={'horizontal'}
          minDate={new Date()}
          />
          
          <DateRange
         editableDateInputs={true}
         onChange={item => onChangeCalendar(item)}
         moveRangeOnFirstSelection={false}
         
          ranges={range}
          months={2}
          className={'date-range2'}
          direction={'horizontal'}
          minDate={new Date()}
          />
    </div>
  )
}

export default CalendarioReservas