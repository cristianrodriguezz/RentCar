import React from 'react'
import './body.css'
import data from '../../data.json'
import Listado from '../Listado/Listado'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


const Body = () => {
  return (
    <div className='body'>
      <Listado data = {data}/>
    </div>

  )
}

export default Body