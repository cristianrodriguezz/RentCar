import React from 'react'
import CategoryCard from './CategoryCard';
import useFetch from '../../Utils/useFetch'


const Categories = () => {

  const Response = useFetch('http://localhost:8080/categorias')
  
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