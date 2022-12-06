import * as React from 'react';
import { useEffect, useRef, useState, useContext } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import Box from '@mui/material/Box';
import { Context } from '../../Contexts/CategoryContextProvider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const CalendarOne = () => {
    const { selectedDates, setSelectedDates } = useContext(Context)

    // Fecha inicial
    const [range, setRange] = useState(
        [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ]
    )


    // Rango de fechas
    const onChageCalendar = (item) => {
        console.log(item);
        setRange([item.selection])
        setSelectedDates([item.selection])
    }

    // Persistencia de fechas mediante Context
    useEffect(() => {
        if (selectedDates) {
            setRange(selectedDates)
        }
    }, [selectedDates])


    // INICIO - Muestra visualmente las fechas seleccionadas - formato
    const [BookinRange, setBookinRange] = useState({
        checkin: '',
        checkout: ''
    })

    useEffect(() => {
        if (selectedDates) {
            setBookinRange({
                checkin: format(range[0].startDate, "dd/MM/yyyy"),
                checkout: format(range[0].endDate, "dd/MM/yyyy")
            }
            )
        }
    }, [selectedDates])
    // FIN - Muestra visualmente las fechas seleccionadas - formato






    // ==========================//
    // FUNCIONES DE LA LIBRERIA //
    // open close
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
    // FUNCIONES DE LA LIBRERIA //
    // ==========================//



    return (
        <>
            <div >
            <Box className='formSearchCalendarr'>
                <label style={{'display':'flex','gap':'9px'}}>
                <CalendarMonthIcon/>
                    <input
                    placeholder='Check-in'
                    onClick={() => setOpen(open => !open)}
                    value={BookinRange.checkin}
                    className='input'
                     />
                </label>
                <label >
                    <input
                    placeholder="Check-out"
                    onClick={() => setOpen(open => !open)}
                    value={BookinRange.checkout}
                    className='input'
                     />
                </label>
            </Box>
            <Box ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => onChageCalendar(item)}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        minDate={new Date()}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="date"
                    />
                }
            </Box>
            </div>
        </>
    )
}

export default CalendarOne