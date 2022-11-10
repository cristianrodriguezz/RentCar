import {React, useContext, useEffect, useState} from 'react'
import CategoryCard from './CategoriaCard';
import useFetch from '../../Utils/useFetch'
import { useRef } from 'react';


const Categories = () => {
  
  const [response] = useState('http://localhost:8080/categorias')

  const Response = useFetch(response)
  
  return (
      <div className='listadoCategoria' >
        {Array.isArray(Response) ? 
          Response.map((item) => (
              <CategoryCard 
              key={item.id}
              image={item.urlImagen}
              title={item.titulo}
              description={item.description}
              id={item.id}
              />
           ))
           :
           Response
          }
      </div>
  )
}

export default Categories