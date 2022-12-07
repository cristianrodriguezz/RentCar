import React from 'react'
import useFetch from '../../Utils/useFetch'
const ListadoMisReservas = () => {
const [response, setReservasRenderizadas] = useState("http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/reservas/cliente/{}");
const Response = useFetch(response,'GET','producto');
  return (
    <div>ListadoMisReservas</div>
  )
}

export default ListadoMisReservas