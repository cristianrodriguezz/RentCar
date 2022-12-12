import axios from "axios"

const baseUrl = 'http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/auth/token'

const login = async credentials => {
    const response = await axios.post(baseUrl,credentials)
    return response.data.respuesta
} 


export default login