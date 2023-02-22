import {React,useState} from 'react'
import CategoryCard from './CategoriaCard';
import useFetch from '../../Utils/useFetch'

const Categories = () => {
  
  const [response] = useState('http://192.168.100.165:8080/RentCar/categorias');

  

  const Response = useFetch(response,'GET','categoria')
  
  return (
    <>
      <h3 style={{"margin":"20px","fontSize":"1.8rem"}}>Buscar por categoria</h3>
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
    </>
  )
}

export default Categories