import React from 'react'
import HeaderProducto from "../../Components/ProductoSelect/HeaderProducto";
import PoliticaProducto from "../../Components/ProductoSelect/politicaProducto/PoliticaProducto";
 

const LayoutProducto = (props) => {
  return (
    <>
        <HeaderProducto titulo={props.titulo} navigate={`${props.navigate}` } estado={props.estado} />
        <div className='container_children' >
          {props.children}
        </div>
        <PoliticaProducto/>
    </>
  )
}

export default LayoutProducto