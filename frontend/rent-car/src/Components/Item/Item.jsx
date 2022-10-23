import React from 'react'

const Item = (props) => {
  return (
    <div className='product'>
        <img src={props.imagen} alt="Car" />
        <p>{props.category}</p>
        <h3>
            {props.title}
        </h3>
        <p>{props.description}
        <span>{props.location}</span>
        </p>
    </div>
  )
}

export default Item