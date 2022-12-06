
export const postBodySignUp = (data) => {

    data.ciudad = "Mendoza";
    data.role = {
        id:1,
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
            results = result.id
            console.log(results);
        })
    return results
}

