import React from 'react'
import './menuBottom.css'
const MenuBottom = () => {
  return (
    <label for="check" class="menuButton">
        <input id="check" type="checkbox"></input>
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bot"></span>
    </label>
  )
}

export default MenuBottom