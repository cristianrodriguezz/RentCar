import React from 'react'
import Body from '../../Components/Body/Body'
import data from '../../data.json'
import Form from '../../Components/form/Form'
import Listado from '../../Components/Listado/Listado'

const Home = () => {
  return (
        
        <Body>
        <Form/>
        <Listado data={data}/>
        </Body>        
  ) 
}

export default Home