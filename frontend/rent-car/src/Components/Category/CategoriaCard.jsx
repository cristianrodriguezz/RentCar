import React from "react";
import "./category.scss";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext } from "react";

const CategoriaCard = (props) => {

  
  const {setFiltroProductoPorCategoria} = useContext(Context);


  return (

      <div className="card" onClick={() => {
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
