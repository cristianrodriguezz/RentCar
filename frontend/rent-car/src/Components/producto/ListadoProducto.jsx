import React, { useState } from "react";
import ItemProducto from "../Item/ItemProducto";
import useFetch from "../../Utils/useFetch.js";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import "../producto/listadoProducto.scss";


const ListadoProducto = () => {
  const [idProducto, setIdProducto] = useState(null);
  const [vista, setVista] = useState("/productos");

  

  const { filtroProductoPorCategoria } = useContext(Context);

  const { filtroPorCiudad } = useContext(Context);

  const [response, setProductosRenderizados] = useState("http://localhost:8080/productos");

  const Response = useFetch(response);

  useEffect(() => {
    if (filtroProductoPorCategoria) {
      setProductosRenderizados(
        `http://localhost:8080/productos/category/${filtroProductoPorCategoria}`
      );
    } else if (filtroPorCiudad) {
      setProductosRenderizados(
        `http://localhost:8080/productos/ciudad/${filtroPorCiudad}`
      );
    }
  }, [filtroProductoPorCategoria, filtroPorCiudad]);

  return (
    <>
      <h3 style={{ margin: "20px" }}>Recomendaciones</h3>
      <div className="listadoProductos">
        {Array.isArray(Response)
          ? Response?.map((item) => (
              <ItemProducto
                id={item.id}
                key={item.id}
                image={item.imagenes[0].url}
                category={item.categoria.titulo}
                title={item.nombre}
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
