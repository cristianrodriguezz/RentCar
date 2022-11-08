import React from 'react'
import './category.scss'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {


  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);


  const [idParametro, setIdParametro] = useState(props.key)
 
 const handleClick = () =>{
    setIdParametro(props.categoryNumber)
 }
 const {context,setContext}= useContext(Context);
  return (
      <Link to={props.manejarClick}>
      <div className='containerCategoria'>
          <card data-image={props.imgUrl}>
          <div>
            <h2 slot="header">{props.title}</h2>
            <p slot="content">{props.description}</p>
          </div>
          <button onClick={ () => setFiltroProductoPorCategoria(props.id)} >VER DETALLES</button>
        </card>
      </div>
      </Link>
  )

  }
export default CategoryCard
  

