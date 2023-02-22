import axios from 'axios'

const baseUrl = 'http://192.168.100.165:8080/RentCar/productos'

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