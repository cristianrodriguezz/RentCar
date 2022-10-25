import React from 'react'
import './category.css'

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
          <a
            href={props.urlCategory}
            className="btn btn-outline-secondary rounded-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a la categoria
          </a>
        </div>
      </div>
  )
}

export default Category

