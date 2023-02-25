import axios from "axios"

const baseUrl = 'http://186.123.128.63:8080/RentCar/auth/token'

const login = async credentials => {
    const response = await axios.post(baseUrl,credentials)
    return response.data.respuesta
} 


export default login