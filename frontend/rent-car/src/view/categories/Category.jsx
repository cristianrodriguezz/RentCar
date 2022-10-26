import React from 'react'
import Listado from '../../Components/Listado/Listado'
import data from '../../data.json'
import Body from '../../Components/Body/Body'

const Category = () => {

  return (
    <Body>
      <Listado data={data}/>
    </Body>
  )
}

export default Category