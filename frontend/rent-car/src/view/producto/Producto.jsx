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
import { useEffect } from "react";
import SkeletonImageGrid from "../../Components/Loading/skeleton/skeletonImageGrid/SkeletonImageGrid";

const Producto = () => {
  const params = useParams();

  const Response = useFetch(`https://falling-wind-1167.fly.dev/productos/${params.id}`,'GET');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ubicacionReserva, setUbicacionReserva] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      fetch(`https://falling-wind-1167.fly.dev/productos/${params.id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, [params.id]);
  const handleClick = () => {

    if (sessionStorage.getItem('user')) {
      navigate(`/productos/${params.id}/reserva`)
      setUbicacionReserva(!ubicacionReserva)
      window.scrollTo(0, 0);
    } else {
      navigate(`/loginRequerido`);
      window.scrollTo(0, 0);
    } 
  }

  
  return (
    <>
      <LayoutProducto titulo={Response.nombre}  navigate={ ubicacionReserva ? `/productos/${params.id}` : '/' } estado={setUbicacionReserva}>
        {
          ubicacionReserva 
        ? 
          <Reserva nombre={Response?.nombre} ubicacion={Response?.ciudad} imagenes={Response}/>
        :
        <>
          <UbicacionProducto ubicacion={Response.ciudad}/>
          {
            isLoaded
            ?
            <>
            <ImageGridGallery imagenes={items.imagenes}/>
            <SliderImage imagenes={Response}/>
            </>
            :
            <SkeletonImageGrid/>
          }
          <CaracteristicasProducto caracteristicas={Response.caracteristicas}/>
          <BloqueReserva ubicacion={handleClick} desactivado={isLoaded ? false : true}/>
        </>
        }
      </LayoutProducto>
    </>
  );
};

export default Producto;
