import React from "react";
import { useParams, useNavigate } from "react-router";
import useFetch from "../../Utils/useFetch";
import UbicacionProducto from "../../Components/ProductoSelect/ubicacionProducto";
import "./productoVista.css";
import BloqueReserva from "../../Components/ProductoSelect/reserva/BloqueReserva";
import ImageGridGallery from "../../Components/ProductoSelect/imageGrid/ImageGridGallery";
import SliderImage from "../../Components/ProductoSelect/slider/SliderImage";
import CaracteristicasProducto from "../../Components/ProductoSelect/caracteristicaProducto/CaracteristicasProducto";
import LayoutProducto from "../../Components/Layout/LayoutProducto";
import Reserva from "../../Components/Reserva/Reserva";
import { useState} from "react";
import PropTypes from 'prop-types';

const Producto = () => {
  const params = useParams();

  const Response = useFetch(`http://localhost:8080/productos/${params.id}`,'GET','imagesGrid');

  const [ubicacionReserva, setUbicacionReserva] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (localStorage.getItem('user')) {
      navigate(`/productos/${params.id}/reserva`)
      setUbicacionReserva(!ubicacionReserva)
      window.scrollTo(0, 0);
    } else {
      navigate(`/loginRequerido`);
      window.scrollTo(0, 0);
    } 
  }
  function isObject(A) {
    if( (typeof A === "object" || typeof A === 'function') && (A !== null) )
{
    return true
}
  }
  
  return (
    <>
      <LayoutProducto titulo={Response.nombre}  navigate={ ubicacionReserva ? `/productos/${params.id}` : '/' } estado={setUbicacionReserva}>
        {
          ubicacionReserva 
        ? 
          <Reserva tituloCard={Response?.nombre} ubicacion={Response?.ciudad} imagenes={Response}/>
        :
        <>
          <UbicacionProducto ubicacion={Response.ciudad}/>
          <SliderImage imagenes={Response}/>
          {
            isObject(Response)
            ?
            <ImageGridGallery imagenes={Response.imagenes}/>
            :
            Response
          }
          
          <CaracteristicasProducto caracteristicas={Response.caracteristicas}/>
          <BloqueReserva ubicacion={handleClick}/>
        </>
        }
      </LayoutProducto>
    </>
  );
};

export default Producto;
