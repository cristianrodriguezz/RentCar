import axios from 'axios'

const baseUrl = 'https://falling-wind-1167.fly.dev/productos'

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