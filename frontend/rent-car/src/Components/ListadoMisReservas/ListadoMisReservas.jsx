import {useState,React} from 'react'
import { useParams } from 'react-router';
import useFetchReservas from '../../Utils/useFetchReservas'
import Producto from '../../view/producto/Producto';
import ItemReserva from './ItemReserva';
const ListadoMisReservas = () => {
const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
const [response, setReservasRenderizadas] = useState(`http://localhost:8080/reservas/cliente/${usuarioSessionStorage?.user_Id}`);
const Response = useFetchReservas(response,'GET','reserva');
  return (
    <>
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
                  productoId={item.producto_id}
                  imagen={item.urlImagen.filter(item=>item.esPrincipal)[0].url}
                  productoNombre={item.nombreProducto}
                />
            ))
          : Response}
      </div>
    </>
  )
}

export default ListadoMisReservas

