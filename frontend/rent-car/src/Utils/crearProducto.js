import axios from 'axios'

const baseUrl = 'http://186.123.128.63:8080/RentCar/productos'

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