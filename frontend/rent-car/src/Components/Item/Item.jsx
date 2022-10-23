import React from 'react'
const styles = {
  'display':'flex',
  'flex-direction':'column',
  'alig-content':'center',
  'justify-content':'center',
  'max-width':'20rem'
}
const contendor = {
  'display':'flex',
  'box-shadow': '10px 7px 19px -7px rgba(0,0,0,0.5)',
  'width':'710px',
  'border-radius': '10px 10px 10px 10px',
  '-moz-border-radius': '10px 10px 10px 10px',
  '-webkit-border-radius': '10px 10px 10px 10px',
  'background-color':'#fff'
}


const Item = (props) => {
  return (
    <div style={contendor}>
      <div style={{'width':'344px'}}>
        <img src={props.imagen} alt="Car" style={{'width':'100%'}} />
      </div>
      <div style={styles}>  
          <p>{props.category}</p>
          <h3>
              {props.title}
          </h3>
          <p>{props.description}
          <span>{props.location}</span>
          </p>
      </div>
    </div>
  )
}

export default Item