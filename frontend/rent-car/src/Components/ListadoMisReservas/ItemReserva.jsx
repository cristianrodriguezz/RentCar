import {useState,React} from 'react'
import useFetch from '../../Utils/useFetch';
import ProductoReserva from './ProductoReserva';
const ItemReserva = (props) => {
    const [productoReservado, setProductoReservad]= useState(`http://localhost:8080/productos/${props.productoId}`);
    const Response = useFetch(productoReservado,'GET','productos');
    console.log(Response);
  return (
    <div  className='containerCar'>
        <div className='containerImageCar' ></div>
      <div className='styles'>  
          <img src={props.imagen} alt="" />
          <p>Hora de comienzo de reserva: {props.hora}</p>
          <p>
          Fecha inicio: {props.fechaInicio}
          </p>
          <p>
          Fecha final: {props.fechaFinal}
          </p>
          <div>
            {props.productoNombre}
          </div>
      </div>
    </div>
  )
}

export default ItemReserva