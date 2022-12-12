import * as React from 'react';
import { useEffect, useRef, useState, useContext } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Container } from '@mui/material';
import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { Context } from '../../Contexts/CategoryContextProvider';
import { useParams } from 'react-router';



const CalendarTwo = (props) => {
    const { excludeDateIntervals, setExcludeDateIntervals } = useContext(Context)
    const params = useParams()
    const [excludedDates, setExcludedDates] = useState([])


    const now = useRef(new Date());
    
    // MANEJO DE RESERVAS //
    const { selectedDates, setSelectedDates } = useContext(Context)

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            maxSpan: new Date(),
            key: 'selection'
        }
    ])
    // Rango de fechas
    const onChageCalendar = (item) => {
        setRange([item.selection])
        setSelectedDates([item.selection])
        if(props.setFieldValue){
            props.setFieldValue('selectedDates',selectedDates) 
        }
        
    }

    // Persistencia de fechas mediante Context
    useEffect(() => {
        if (selectedDates) {
            setRange(selectedDates)
            
        }
    }, [selectedDates])
    useEffect(() => {
        const arrayFechas = [];
        fetch(`http://localhost:8080/reservas/producto/${params.id}`)
          .then((res) =>res.json())
          .then(
            (result) => {

              setExcludeDateIntervals(result)
              result.map(item => arrayFechas.push({fechaInicioReserva: item?.fechaInicioReserva, fechaFinalReserva: item?.fechaFinalReserva}))
              setExcludeDateIntervals(arrayFechas)
              
            }
            
          );
  
    }, [params.id,setExcludeDateIntervals,selectedDates,setExcludedDates]);


    
    // Le doy formato a las fechas que vienen de la DB
    useEffect(() => {
        if (excludeDateIntervals) {
            const exclude = excludeDateIntervals?.map(el => {
                return {
                    start: new Date(el?.fechaInicioReserva),
                    end: new Date(el?.fechaFinalReserva)
                }
            })
            setExcludedDates(exclude);
        }

    }, [excludeDateIntervals])
    

    // Data de reservas
    const excludeDays = () => {
        const arrayDateDisable = []
        const aux = []
        if (!excludedDates || excludeDateIntervals?.length === 0 || !excludeDateIntervals  ) return arrayDateDisable;

        for (let i = 0; i < excludedDates.length; i++) {

            // Each day between 6 October 2014 and 10 October 2014:
            const result = eachDayOfInterval({
                start: addDays(new Date(excludeDateIntervals[i].fechaInicioReserva), 1),
                end: addDays(new Date(excludeDateIntervals[i].fechaFinalReserva), 1)
            })
            aux.push(result)
        }
        aux.forEach(element => {
            element.forEach(item => {
                arrayDateDisable.push(item)
            });
        });
        return arrayDateDisable
    }

    // ==========================//
    // FUNCIONES DE LA LIBRERIA //
    // open close
    const [open, setOpen] = useState(true)

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
        <>
            <Container ref={refOne}>
                {(true) &&
                <>
                    <DateRange
                        onChange={item => onChageCalendar(item)}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        minDate={now.current}
                        disabledDates={excludeDays()}
                        // disabledDates={arrayFechas}
                        months={1}
                        direction="horizontal"
                        className={'date-range1'}
                    />
                    <DateRange
                        onChange={item => onChageCalendar(item)}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        minDate={now.current}
                        disabledDates={excludeDays()}
                        // disabledDates={arrayFechas}
                        months={2}
                        direction="horizontal"
                        className={'date-range2'}
                    />
                    {props?.errores ? <div className="error">{props?.errores}</div>:null}
                </>
                }
            </Container>


        </>
    )
}

export default CalendarTwo