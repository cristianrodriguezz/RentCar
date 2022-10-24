import React from 'react'
import './body.css'
import data from '../../data.json'
import Listado from '../Listado/Listado'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


import Form from '../form/Form'


const Body = (children) => {
  return (
    <>
      <Form/>
      <Listado data = {data}/>
    </>
  )
}

export default Body
