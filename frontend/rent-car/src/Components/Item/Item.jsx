import React from 'react'
const styles = {
  'display':'flex',
  'flexDirection':'column',
  'gap':'1rem',
  'aligContent':'center',
  'justifyContent':'center',
  'maxWidth':'20rem'
}
const contendor = {
  'display':'flex',
  'boxShadow': '10px 7px 19px -7px rgba(0,0,0,0.5)',
  'maxWidth':'710px',
  'maxHeight':'250px',
  'borderRadius': '10px 10px 10px 10px',
  'backgroundColor':'#fff',
  'padding':'10px'
}
const buttonStyle = {
  'backgroundColor': 'var(--first-color)',
  'color':'white',
  'border':'none',
  'borderRadius':'5px'
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
