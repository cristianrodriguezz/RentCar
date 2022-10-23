import React from 'react'
import './body.css'
import data from '../../data.json'
import Listado from '../Listado/Listado'

const Body = () => {
  return (
    <body>
      <Listado
      data = {data}/>
    </body>
  )
}

export default Body