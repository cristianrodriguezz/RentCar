import {useState,React} from 'react'
import useFetch from '../../Utils/useFetch'
import ItemReserva from './ItemReserva';
const ListadoMisReservas = () => {
const [response, setReservasRenderizadas] = useState(`http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/reservas/cliente/${usuarioSessionStorage?.user_Id}`);
const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
const Response = useFetch(response,'GET','producto');
  return (
    <>
      <h3 style={{ margin: "20px" }}>Recomendaciones</h3>
      <div className="listadoProductos">
        {Array.isArray(Response)
          ? 
            Response?.map((item) => (
                <ItemReserva
                  id={item.id}
                  key={item.id}
                  hora={item.horaComienzoDeReserva}
                  fechaInicio={item.fechaInicioReserva}
                  fechaFinal={item.fechaFinalReserva}
                />
            ))
          : Response}
      </div>
    </>
  )
}

export default ListadoMisReservas

