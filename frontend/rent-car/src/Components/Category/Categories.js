import React from 'react'
import CategoryCard from './CategoryCard';
import useFetch from '../../Utils/useFetch'


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
              <CategoryCard 
              imgUrl={item.urlImagen}
              title={item.titulo}
              categoryNumber={setIdParametro}
              urlCategory={item.titulo}
              description={item.description}
              manejarClick={handleResponse}
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