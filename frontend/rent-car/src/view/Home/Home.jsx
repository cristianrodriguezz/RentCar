import React from 'react'
import Body from '../../Components/Body/Body'
import Categories from '../../Components/Category/Categories'
import ListadoProducto from '../../Components/producto/ListadoProducto'

const Home = () => {
  return (
        
        <Body>
          <Categories/>
          <ListadoProducto/>
        </Body>        
  ) 
}

export default Home