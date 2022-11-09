import React from 'react'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext, useState } from 'react'


const CategoryCard = (props) => {
  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);


  const [idParametro, setIdParametro] = useState(props.key)
 
 const handleClick = () =>{
    setIdParametro(props.categoryNumber)
 }
  return (

      <div className='containerCategoria'>
          <div data-image={props.imgUrl}>
          <div>
            <h2 slot="header">{props.title}</h2>
            <p slot="content">{props.description}</p>
          </div>
          <button onClick={ () => setFiltroProductoPorCategoria(props.id)} >VER DETALLES</button>
        </div>
      </div>
 
  )

}
export default CategoryCard
  

