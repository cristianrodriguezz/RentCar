import React from 'react'
import './category.css'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'

const CategoryCard = (props) => {
  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);

  return (
      <div className='containerCategoria'>
        <div className='containerImgCategoria'>
          <img src={props.imgUrl} alt="Auto" style={{'width':'100%'}}/>
        </div>
        <div>
          <h2> {props.title} </h2>
          <p>
            {props.description}
          </p>
        </div>
        <button onClick={ () => setFiltroProductoPorCategoria(props.id)} >VER DETALLES</button>
      </div>
     
  )
}

export default CategoryCard

