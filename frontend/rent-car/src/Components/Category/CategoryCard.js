import React from 'react'
import './category.css'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {


  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);


  const [idParametro, setIdParametro] = useState(props.key)
 
 const handleClick = () =>{
    setIdParametro(props.categoryNumber)
 }
  return (
      <Link to={props.manejarClick}>
      <div className='containerCategoria'>
        <div className='containerImgCategoria'>
          <img src={props.imgUrl} alt="Auto" style={{'width':'100%'}}/>
        </div>
        <div>
          <h2> {props.title} </h2>
          <p>
            {props.description}
          </p>
        </div>
        <button onClick={ () => setFiltroProductoPorCategoria(props.id)} >VER DETALLES</button>
      </div>
      </Link>
  )

  }
export default CategoryCard
  
