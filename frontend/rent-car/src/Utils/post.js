

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
