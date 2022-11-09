import {React, useState} from 'react'
import CategoryCard from './CategoryCard';
import useFetch from '../../Utils/useFetch'
import Categoria from './Categoria'


const Categories = () => {

  const [idParametro, setIdParametro] = useState()
  
  const [response, setResponse] = useState('http://localhost:8080/categorias')
  
  const Response = useFetch(response)
  
  const handleResponse = ()=>{
    setResponse(`http://localhost:8080/productos/category/${idParametro}`)
  } 
  

  return (
    <div>
      <div>
        {Array.isArray(Response) ? 
          Response.map((item) => (
            <div key={item.id}>
              <Categoria
              image={item.urlImagen}
              title={item.titulo}
   
              description={item.description}

              id={item.id}
              />
           </div>
           ))
           :
           Response
          }
      </div>
    </div>
  )
}

export default Categories