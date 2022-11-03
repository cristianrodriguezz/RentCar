import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'
import './category.css'

const CategoryCard = (props) => {
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
          <Link
            to={props.urlCategory}
          >
            Ir a la categoria
          </Link>
        </div>
      </div>
  )
}

export default CategoryCard

