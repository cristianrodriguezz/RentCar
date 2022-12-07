import axios from "axios"

const baseUrl = 'http://localhost:8080/auth/token'

const login = async credentials => {
    const response = await axios.post(baseUrl,credentials)
    return response.data.respuesta
} 


export default login