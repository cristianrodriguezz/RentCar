import React from 'react'
import { useLocation, useNavigate, useParams} from 'react-router';
import './headerProducto.css'
import Arrow from '../arrow/Arrow';
const HeaderProducto = (props) =>{
    
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation()
    
    const handleClick = () => {
        navigate(props.navigate);
        if(location.pathname === `/productos/${params.id}/reserva`){
            props.estado(false)
        }
    }
    return  (
        
        <div className='headerContainer'>
            <div className='Caract'>
            <h3>{props.descripcion}</h3>
            <h1>{props.titulo}</h1>
            </div>

            <Arrow click={handleClick}/>
            
        </div>


    );

}
export default HeaderProducto
