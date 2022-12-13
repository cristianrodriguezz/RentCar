import {  React } from "react";
import './itemreserva.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ItemReserva = (props) => {
  return (

    <div className="containerCar2">
      <div className="containerImageCar2">
        <img src={props?.image} alt="Auto" />
      </div>
      <div className="styles2">
        <div>
          <strong>{props?.productoNombre}</strong>
        </div>
        <p><strong>Hora de reserva:</strong> {props?.hora}</p>
        <p><strong>Fecha inicio: </strong> {props?.fechaInicio}</p>
        <p><strong>Fecha final: </strong>{props?.fechaFinal}</p>
        
      </div>
    </div>
  );
};

export default ItemReserva;
