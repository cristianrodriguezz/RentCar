import axios from "axios"

const baseUrl = 'http://192.168.100.165:8080/RentCar/auth/token'

const login = async credentials => {
    const response = await axios.post(baseUrl,credentials)
    return response.data.respuesta
} 


export default login