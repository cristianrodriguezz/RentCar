import React from 'react'
import Categories from '../../Components/Category/Categories'

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
    <div style={{heigh: "100vh"}}>
      <Categories/>
    </div>
  )
}

export default Category