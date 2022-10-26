import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'

const Category = (props) => {
  return (
    <div className="card text-center bg-dark">
        <div className="overflow">
          <img src={props.imgUrl} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h2 className="card-tittle"> {props.title} </h2>
          <p className="card-text">
            {props.description}
          </p>
          <Link to={props.urlCategory}
          >
            Ir a la categoria
          </Link>
        </div>
      </div>
  )
}

export default Category

