import {useState,React} from 'react'
import useFetchReservas from '../../Utils/useFetchReservas'
import HeaderMisReservas from './HeaderMisReservas';
import ItemReserva from './ItemReserva';
import './listadoMisReservas.scss';


const ListadoMisReservas = () => {
const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
const [response] = useState(`http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/reservas/cliente/${usuarioSessionStorage?.user_Id}`);
const Response = useFetchReservas(response);

  return (
    <>
      <div className="listadoProductos2">
        <HeaderMisReservas></HeaderMisReservas>
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
                  image={item.urlImagen?.filter(item => item.esPrincipal)[0].url}
                  productoNombre={item.nombreProducto}
                />
            ))
          : Response}
      </div>
    </>
  )
}

export default ListadoMisReservas

