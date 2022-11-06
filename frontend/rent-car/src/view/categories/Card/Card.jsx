import React from 'react'
import { styles, contendor, buttonStyle } from '../../../Constant/styles.js'


const Card = (props) => {
  return (
    <div style={contendor}>
      <div style={{'width':'344px','display':'flex','alignItems':'center', 'justifyContent':'center'}}>
        <img src={props.imagen} alt="Car" style={{'width':'100%','margin':'auto'}} />
      </div>
      <div style={styles}>  
          <h3>
              {props.titulo}
          </h3>
          <p>{props.descripcion}
          </p>
          <button style={buttonStyle}>Ver detalle</button>
      </div>
    </div>
  )
}

export default Card