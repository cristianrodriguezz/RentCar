import React from 'react'
import './category.css'
import { Context }from '../../Contexts/CategoryContextProvider'
import { useContext } from 'react'

const CategoryCard = (props) => {

  const [idParametro, setIdParametro] = useState(props.key)
 
 const handleClick = () =>{
    setIdParametro(props.categoryNumber)
 }
 const [context,setContext] = useContext(Context);
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
        <button onClick={ () => setContext(props.id)} >VER DETALLES</button>
      </div>
      </Link>
  )

  }
export default CategoryCard
  
