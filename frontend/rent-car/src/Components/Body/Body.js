import React from 'react'
import './body.css'
import data from '../../data.json'
import Listado from '../Listado/Listado'

const Body = () => {
  return (
    <div className='body'>
      <Listado data = {data}/>
    </div>
  )
}

export default Body
