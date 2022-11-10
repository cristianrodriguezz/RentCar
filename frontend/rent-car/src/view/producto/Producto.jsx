import React from 'react'
import Body from '../../Components/Body/Body'
import HeaderProducto from '../../Components/ProductoSelect/headerProducto'
import { useParams } from 'react-router'

//import useFetch from '../../Utils/useFetch'
import UbicacionProducto from '../../Components/ProductoSelect/ubicacionProducto'
import ImageGridGallery from '../../Components/ProductoSelect/galeriaImagenes'
import DescripcionProducto from '../../Components/ProductoSelect/descripcionProducto'
import CaracteristicasProducto from '../../Components/ProductoSelect/caracteristicasProducto'
import PoliticaProducto from '../../Components/ProductoSelect/politicasProducto'
import './productoVista.css'
import BloqueReserva from '../../Components/ProductoSelect/BloqueReserva'
const Producto = () => {
    const params = useParams();
    //const Response = useFetch('http://localhost:8080/productos');
    
    console.log(params.id)


    return (
        <>
            <HeaderProducto/>
            <UbicacionProducto></UbicacionProducto>
            <ImageGridGallery></ImageGridGallery>
            <DescripcionProducto></DescripcionProducto>
            <CaracteristicasProducto></CaracteristicasProducto>
            <BloqueReserva/>
            <PoliticaProducto></PoliticaProducto>
        </>
    )



}

export default Producto;