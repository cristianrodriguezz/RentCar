import axios from 'axios'

const baseUrl = 'http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/productos'

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