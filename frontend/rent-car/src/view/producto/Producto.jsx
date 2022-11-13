import React from "react";
import Body from "../../Components/Body/Body";
import HeaderProducto from "../../Components/ProductoSelect/headerProducto";
import { useParams } from "react-router";

import useFetch from "../../Utils/useFetch";
import UbicacionProducto from "../../Components/ProductoSelect/ubicacionProducto";
import ImageGridGallery from "../../Components/ProductoSelect/galeriaImagenes";
import DescripcionProducto from "../../Components/ProductoSelect/descripcionProducto";
import CaracteristicasProducto from "../../Components/ProductoSelect/caracteristicasProducto";
import PoliticaProducto from "../../Components/ProductoSelect/politicasProducto";
import "./productoVista.css";
import BloqueReserva from "../../Components/ProductoSelect/BloqueReserva";
const Producto = () => {
  const params = useParams();
  const Response = useFetch(`http://localhost:8080/productos/${params.id}`);

  
  console.log(params.id);
  console.log(Response)

  return (
    <>
      <Body>
        <HeaderProducto titulo = {Response.nombre}/>
        <UbicacionProducto ubicacion ={Response.ciudad} ></UbicacionProducto>
        <ImageGridGallery imagenes = {Response.imagenes} ></ImageGridGallery>
        <DescripcionProducto descripcion = {Response.descripcion} titulo = {Response.nombre}></DescripcionProducto>
        <CaracteristicasProducto caracteristicas = {Response.caracteristicas}></CaracteristicasProducto>
        <BloqueReserva />
        <PoliticaProducto></PoliticaProducto>
      </Body>
    </>
  );
};

export default Producto;
