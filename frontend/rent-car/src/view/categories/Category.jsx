import React from 'react'
import Listado from '../../Components/Listado/Listado';
import data from '../../data.json';

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
      <Listado data={data} />
    </div>
  )
}

export default Category