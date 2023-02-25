import React, { useEffect, useState } from "react";
import ItemProducto from "../Item/ItemProducto";
import useFetch from "../../Utils/useFetch.js";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext } from "react";
import "../producto/listadoProducto.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateABase } from "../../Utils/formatDate";


const ListadoProducto = () => {

  const { filtroProductoPorCategoria } = useContext(Context);

  const { filtroPorCiudad } = useContext(Context);

  const {selectedDates} = useContext(Context)

  const {search} = useContext(Context)

  const [response, setProductosRenderizados] = useState("http://186.123.128.63:8080/RentCar/productos");
  
  const {reestablecerFiltros, setReestablecerFiltros} = useContext(Context)

  let Response = useFetch(response,'GET','producto');

  useEffect(() => {
    if(filtroProductoPorCategoria){
      setProductosRenderizados(`http://186.123.128.63:8080/RentCar/productos/category/${filtroProductoPorCategoria}`)
    }
    if(reestablecerFiltros){
      setProductosRenderizados("http://186.123.128.63:8080/RentCar/productos")
    }

    if(!selectedDates){
    } else if(selectedDates[0].startDate && selectedDates[0].endDate && search){
      const startDate = formatDateABase(selectedDates[0]?.startDate)
      const endDate = formatDateABase(selectedDates[0]?.endDate)
      console.log(startDate)
      console.log(endDate);
      setProductosRenderizados(`http://186.123.128.63:8080/RentCar/productos/ciudad/${filtroPorCiudad}/fechainicio/${startDate}/fechafin/${endDate}`)
    }
  }, [filtroProductoPorCategoria, selectedDates, filtroPorCiudad,search,reestablecerFiltros]);

  

  return (
    <>
      <h3 style={{ margin: "20px" }}>Recomendaciones</h3>
      <div className="listadoProductos">
        {Array.isArray(Response)
          ? 
            Response?.map((item) => (
                <ItemProducto
                  id={item.id}
                  key={item.id}
                  image={item.imagenes.filter(item => item.esPrincipal)[0].url}
                  category={item.categoria.titulo}
                  title={item.nombre}
                  icon={item.caracteristicas.map( item =>  {return <FontAwesomeIcon icon={item.icono} style={{'color':'var(--bottonForm)','marginLeft':'10px'}}/>})}
                  description={item.descripcion}
                  price={item.precio}
                  numeroProducto={item.id}
                />
            ))
          : Response}
      </div>
    </>
  );
};

export default ListadoProducto;
