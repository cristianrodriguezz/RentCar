import React from 'react'
import Body from '../../Components/Body/Body'
import Categories from '../../Components/Category/Categories'
import ListadoProducto from '../../Components/producto/ListadoProducto'
import Form from '../../Components/form/Form'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useContext } from 'react'
import { Context } from "../../Contexts/CategoryContextProvider";

const Home = () => {
  const {botonesHeader, setBotonesHeader} = useContext(Context);

  let signup = useLocation();

  useEffect(() => {
    setBotonesHeader(signup?.pathname)
  }, [setBotonesHeader, setBotonesHeader?.signup?.pathname, signup?.pathname]);


  return (
      <>
        <Form/>
        <Categories/> 
        <Body>
          <ListadoProducto/>
        </Body>
      </>  
  ) 
}

export default Home