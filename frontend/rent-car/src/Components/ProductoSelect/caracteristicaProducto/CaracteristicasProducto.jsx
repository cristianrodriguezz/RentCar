import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './caracteristicaProducto.scss'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


const CaracteristicasProducto = (props) => {
    return (
        <div className='caracteristicaCointainer'>
            <h4>Caracteristicas del auto</h4>
            <hr></hr>
            <div className="gridContainer">
                {props?.caracteristicas?.map( item => 
                    <div className="gridContainerItem" key={item.id}><FontAwesomeIcon icon="" />{item.nombre}</div>
                )}
            </div>
        </div>
    );


}

export default CaracteristicasProducto;