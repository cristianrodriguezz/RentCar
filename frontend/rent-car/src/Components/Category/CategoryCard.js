import React from 'react'
import './category.scss'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'

const CategoryCard = (props) => {
  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);

  return (
      <div className='containerCategoria'>
          <card data-image={props.imgUrl}>
          <div>
            <h2 slot="header">{props.title}</h2>
            <p slot="content">{props.description}</p>
          </div>
          <button onClick={ () => setFiltroProductoPorCategoria(props.id)} >VER DETALLES</button>
        </card>
      </div>
     
  )
}

export default CategoryCard


