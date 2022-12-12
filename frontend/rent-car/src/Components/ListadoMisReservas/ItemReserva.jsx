import { useState, React } from "react";
import useFetch from "../../Utils/useFetch";
import ProductoReserva from "./ProductoReserva";
import './itemreserva.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ItemReserva = (props) => {
  const [productoReservado, setProductoReservad] = useState(
    `http://localhost:8080/productos/${props.productoId}`
  );
  const Response = useFetch(productoReservado, "GET", "productos");
  return (

    <div className="containerCar2">
      <div className="containerImageCar2">
        <img src={props?.imagen} alt="" />
      </div>
      <div className="styles2">
        <div><strong>{props?.productoNombre}</strong></div>
        <p><strong>Hora de reserva:</strong> {props?.hora}</p>
        <p><strong>Fecha inicio: </strong> {props?.fechaInicio}</p>
        <p><strong>Fecha final: </strong>{props?.fechaFinal}</p>
        <button style={{backgroundColor:'red',padding:'1rem'}}><FontAwesomeIcon icon ={faTrash} style={{color:'white'}}/></button>
        
      </div>
    </div>
  );
};

export default ItemReserva;
