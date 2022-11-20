import React from 'react'
import './arrow.css'

const Arrow = (props) => {
  return (
    <div class="arrow" onClick={props.click}>
        <div class="arrow-top"></div>
        <div class="arrow-bottom"></div>
    </div>
  )
}

export default Arrow