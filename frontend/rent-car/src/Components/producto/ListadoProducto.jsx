import React from 'react'
import ItemProducto from '../Item/ItemProducto';
import useFetch from '../../Utils/useFetch.js'


const ListadoProducto = () => {

    const Response = useFetch('http://localhost:8080/productos');
    
    

    return (

      <div>
        {
          Array.isArray(Response) ?
            Response.map(item=>(
              <ItemProducto
              key={item.id}
              imagen={'https://media.istockphoto.com/id/1157655660/es/foto/suv-rojo-gen%C3%A9rico-sobre-un-fondo-blanco-vista-lateral.jpg?s=612x612&w=0&k=20&c=0I2xA9oCnNUfluy5m1ErkM4NwHQOkhDUr2HwKXNO1z8='}
              category={item.imagenes[0].titulo}
              title={item.nombre}
              description={item.descripcion}
              price={item.precio}
              />
              )) :
              Response
        }
        
        </div>
    );
  }


export default ListadoProducto
