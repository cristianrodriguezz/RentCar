import React from 'react'
import './body.css'
import data from '../../data.json'
import Listado from '../Listado/Listado'

import Form from '../form/Form'


const Body = () => {
  return (
    <>
    <Form/>
    <Listado data = {data}/>
    </>
  )
}

export default Body
