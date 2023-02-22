import axios from 'axios'

export const postBodySignUp = (data) => {

    data.ciudad = "Mendoza";
    data.role = {
        id:2,
        roleName:"ROLE_USER"
    }
    const body = {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
    }
    return body;
}
export const postBodyLogin = (data) =>{
    const body = {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
    }
    return body;
}
export const postReserva = (data,token) => {
    const body = {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
            authorization: token,
            'Content-Type': 'application/json'
        }
    }
    return body;
}
export const fetchReserva = (url,data,token) => {
    let results = '';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
        })
        .then(res =>  res.json())
        .then((result) => {
            results = result
            console.log("Reserva: ")
            console.log(results);
        })
    return results
}
export const postCaracteristica = async (data,token) => {
    const baseUrl = 'http://192.168.100.165:8080/RentCar/caracteristicas';
    const authorization =  {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }
    const response = await axios.post(baseUrl,data,authorization)
    return response.data

}
export const crearCuenta = async (data) => {
    const baseUrl = 'http://192.168.100.165:8080/RentCar/usuarios/'
    data.ciudad = "Mendoza";
    data.role = {
        id:2,
        roleName:"ROLE_USER"
    }
    const response = await axios.post(baseUrl,data)
    return response.data
}

export const crearProducto = async (data, token) => {
    const baseUrl = 'http://192.168.100.165:8080/RentCar/productos/'
    const authorization =  {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }
    const response = await axios.post(baseUrl,data,authorization)
    return response.data
}
