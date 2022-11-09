import React from 'react'
import Body from '../../Components/Body/Body'
import HeaderProducto from '../../Components/ProductoSelect/headerProducto'
import { useParams } from 'react-router'

//import useFetch from '../../Utils/useFetch'
import UbicacionProducto from '../../Components/ProductoSelect/ubicacionProducto'
import QuiltedImageList from '../../Components/ProductoSelect/galeriaImagenes'
const Producto = () => {
    const params = useParams();
    //const Response = useFetch('http://localhost:8080/productos');
    
    console.log(params.id)


    return (
        <Body>
            <HeaderProducto/>
            <UbicacionProducto></UbicacionProducto>
            <QuiltedImageList></QuiltedImageList>
            {/*   */}
        </Body>
    )



}

export default Producto;