import React from 'react'
import Body from '../../Components/Body/Body'
import Categories from '../../Components/Category/Categories'
import ListadoProducto from '../../Components/producto/ListadoProducto'
import Form from '../../Components/form/Form'


const Home = () => {
  return (
      <>
        <Form/>
        <Categories/>  
        <Body><ListadoProducto/></Body>
        
      </>  
  ) 
}

export default Home