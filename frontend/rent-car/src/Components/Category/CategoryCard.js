import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './category.css'

const CategoryCard = (props) => {

  const [idParametro, setIdParametro] = useState(props.key)

  return (
    <Link to={props.manejarClick}>
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
      </div>
      </Link>
  )
}

export default CategoryCard

