import React from 'react'
import {useState} from 'react'
import useFetch from '../../Utils/useFetch'
const ListadoMisReservas = () => {
const [response, setReservasRenderizadas] = useState("http://localhost:8080/reservas/cliente/{}");
const Response = useFetch(response,'GET','producto');
  return (
    <div>ListadoMisReservas</div>
  )
}

export default ListadoMisReservas