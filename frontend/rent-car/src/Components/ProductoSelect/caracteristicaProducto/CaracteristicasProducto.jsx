import React from 'react'
import './caracteristicaProducto.scss'

const CaracteristicasProducto = (props) => {
    return (
        <div className='caracteristicaCointainer'>
            <h4>Caracteristicas del auto</h4>
            <hr></hr>
            <div className="gridContainer">
                {props?.caracteristicas?.map( item => 
                    <div className="gridContainerItem" key={item.id}>{item.descripcion}</div>
                )}

            </div>


        </div>



    );


}

export default CaracteristicasProducto;