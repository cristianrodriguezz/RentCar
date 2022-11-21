import React from "react";
import HeaderProducto from "../../Components/ProductoSelect/headerProducto";
import { useParams } from "react-router";
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
import { useSearchParams } from "react-router-dom";



const Producto = () => {
  const params = useParams();
  const Response = useFetch(`http://localhost:8080/productos/${params.id}`);

  const [ubicacionReserva, setUbicacionReserva] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();


  const handleClick = () => {
    if (localStorage.getItem('user')) {
      setSearchParams({
        productoReserva : `/productos/${params.id}/reserva`
      })
      console.log(searchParams.get('productoReserva'))
      setUbicacionReserva(!ubicacionReserva)
    } else {
      navigate(`/loginRequerido`);
    } 
  }



  return (
    <>
      <LayoutProducto titulo={Response.nombre}  navigate={ ubicacionReserva ? `/productos/${params.id}` : '/' } estado={setUbicacionReserva}>
        {
          ubicacionReserva ? 
        <Reserva tituloCard={Response.nombre} ubicacion={Response.ciudad}/>
        :
        <>
          <UbicacionProducto ubicacion={Response.ciudad}/>
          <SliderImage imagenes={Response}/>
          <ImageGridGallery imagenes={Response.imagenes} />
          <CaracteristicasProducto caracteristicas={Response.caracteristicas}/>
          <BloqueReserva ubicacion={handleClick}/>
        </>
        }
      </LayoutProducto>
    </>
  );
};

export default Producto;
