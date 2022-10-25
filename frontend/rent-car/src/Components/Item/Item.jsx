import React from 'react'
const styles = {
  'display':'flex',
  'flex-direction':'column',
  'gap':'1rem',
  'alig-content':'center',
  'justify-content':'center',
  'max-width':'20rem'
}
const contendor = {
  'display':'flex',
  'box-shadow': '10px 7px 19px -7px rgba(0,0,0,0.5)',
  'max-width':'710px',
  'max-height':'250px',
  'border-radius': '10px 10px 10px 10px',
  '-moz-border-radius': '10px 10px 10px 10px',
  '-webkit-border-radius': '10px 10px 10px 10px',
  'background-color':'#fff',
  'padding':'10px'
}
const buttonStyle = {
  'backgroundColor': 'var(--first-color)',
  'color':'white',
  'border':'none',
  'border-radius':'5px'
}


const Item = (props) => {
  return (
    <div style={contendor}>
      <div style={{'width':'344px','display':'flex','alignItems':'center', 'justifyContent':'center'}}>
        <img src={props.imagen} alt="Car" style={{'width':'100%','margin':'auto'}} />
      </div>
      <div style={styles}>  
          <p>{props.category}</p>
          <h3>
              {props.title}
          </h3>
          <p>{props.description}
          <span>{props.location}</span>
          </p>
          <button style={buttonStyle}>Ver detalle</button>
      </div>
    </div>
  )
}

export default Item
