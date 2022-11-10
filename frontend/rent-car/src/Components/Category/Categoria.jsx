import React from 'react'
import './category.css'
import { Context } from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'


const Categoria = (props) => {

  const { filtroProductoPorCategoria, setFiltroProductoPorCategoria } = useContext(Context);


  return (
    <div className="containerCategory">
      <div className="b-game-card">
        <div className="b-game-card__cover"></div>
      </div>
    </div>

  )
}

export default Categoria