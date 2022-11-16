import React from "react";
import HeaderProducto from "../../Components/ProductoSelect/HeaderProducto";
import { useParams } from "react-router";
import useFetch from "../../Utils/useFetch";
import UbicacionProducto from "../../Components/ProductoSelect/ubicacionProducto";
import "./productoVista.css";
import BloqueReserva from "../../Components/ProductoSelect/reserva/BloqueReserva";
import ImageGridGallery from "../../Components/ProductoSelect/imageGrid/ImageGridGallery";
import SliderImage from "../../Components/ProductoSelect/slider/SliderImage";
import DescripcionProducto from "../../Components/ProductoSelect/descripcionProducto/DescripcionProducto";
import CaracteristicasProducto from "../../Components/ProductoSelect/caracteristicaProducto/CaracteristicasProducto";
import PoliticaProducto from "../../Components/ProductoSelect/politicaProducto/PoliticaProducto";


const Producto = () => {
  const params = useParams();
  const Response = useFetch(`http://localhost:8080/productos/${params.id}`);

  
  console.log(params.id);
  console.log(Response)


  return (
    <>
        <HeaderProducto titulo = {Response.nombre}/>
        <UbicacionProducto ubicacion ={Response.ciudad} />
        <ImageGridGallery imagenes = {Response.imagenes} />
        <SliderImage imagenes= {Response}/>
        <DescripcionProducto descripcion ={Response.descripcion} titulo ={Response.nombre}/>
        <CaracteristicasProducto caracteristicas = {Response.caracteristicas}/>
        <BloqueReserva />
        <PoliticaProducto/>
    </>
  );
};

export default Producto;
