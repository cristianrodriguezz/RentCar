import React from 'react'
import CategoryCard from './CategoryCard';
import useFetch from '../../Utils/useFetch'
import { useState } from 'react';

const Categories = () => {

  
  const [response, setResponse] = useState('http://localhost:8080/categorias')
  
  const Response = useFetch(response)
  
  const handleClick = () => {
    setResponse(`http://localhost:8080/productos/category/{}`)
    
  }

  
  
  return (
    <div>
      <div>
        {Array.isArray(Response) ? 
          Response.map((item) => (
            <div key={item.id}>
              <CategoryCard 
              imgUrl={item.urlImagen}
              title={item.titulo}
              urlCategory={item.titulo}
              description={item.description}
              manejarClick={handleClick}
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