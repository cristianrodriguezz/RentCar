import axios from "axios"

const baseUrl = 'https://falling-wind-1167.fly.dev/auth/token'

const login = async credentials => {
    const response = await axios.post(baseUrl,credentials)
    return response.data.respuesta
} 


export default login