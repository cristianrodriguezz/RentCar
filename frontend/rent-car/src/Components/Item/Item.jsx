import React from 'react'
const styles = {
  'display':'flex',
  'flex-direction':'column',
  'alig-content':'center',
  'justify-content':'center',
  'max-width':'20rem'
}


const Item = (props) => {
  return (
    <div style={{'display':'flex'}}>
      <div style={{'width':'300px'}}>
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