import React from 'react'
<<<<<<< HEAD
import HeaderProducto from "../ProductoSelect/headerProducto";
=======
import HeaderProducto from "../../Components/ProductoSelect/HeaderProducto"

>>>>>>> 08e346877c9d934a6272033e41b1e94eef91ac2c
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