import React from 'react'
import Listado from '../../Components/Listado/Listado'
import Body from '../../Components/Body/Body'
import data from '../../data.json'
import Form from '../../Components/form/Form'

const Home = () => {
  return (
    <Body>
      <Form/>
      <Listado data={data}></Listado>
    </Body>
  )
}

export default Home