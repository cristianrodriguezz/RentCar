import axios from 'axios'

const baseUrl = 'http://localhost:8080/productos'

const crearProducto = async (producto,token)=> {
    const response = await axios.post(baseUrl,producto,
        {        
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        })
    return response.data.respuesta
}

export default crearProducto