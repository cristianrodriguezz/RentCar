import React from "react";
import "./category.scss";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext, useEffect,useState } from "react";
import { useRef } from "react";

const CategoriaCard = (props) => {

  
  const {filtroProductoPorCategoria,setFiltroProductoPorCategoria} = useContext(Context);

  const [containerSeleccionado, setcontainerSeleccionado] = useState(false);
  
  const card = useRef()

  useEffect(() => {
    if (filtroProductoPorCategoria === props.id){
      setcontainerSeleccionado(true)
    }else if(filtroProductoPorCategoria !== props.id){
      setcontainerSeleccionado(false)
    }
    if(containerSeleccionado){
      card.current.classList.toggle('seleccionado')
    }

  }, [filtroProductoPorCategoria,props.id,containerSeleccionado]);


  return (

      <div ref={card} className="card" onClick={() => {
        setFiltroProductoPorCategoria(props.id)
        
      }}>
        <div className="card_image">
          <img src={props.image} alt="Categoria" />
        </div>
        <div className="card_title title-white">
          <p>{props.title}</p>
        </div>
      </div>

  );
};

export default CategoriaCard;
