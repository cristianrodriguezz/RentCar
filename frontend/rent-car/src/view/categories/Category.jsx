import React, { useEffect , useState} from 'react'
import  axios  from 'axios'
import Card from './Card/Card'
const Category = () => {
    const [categorias,setCategoria] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:8080/categorias")
      .then(response =>{
          setCategoria(response.data)
      .catch(error=>{
        console.log(error);
      })    
      },[])
    })
 
  return (
    <div>
      {
        categorias?.map(categoria=>
          <Card
            key={categoria.id}
            titulo={categoria.titulo}
            descripcion={categoria.descripcion}
            imagen={categoria.urlImagen}
          />
          
          )
      }
    </div>
  ) }


export default Category