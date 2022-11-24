import React from 'react'
import { useNavigate, useParams} from 'react-router';
import './headerProducto.css'
import Arrow from '../arrow/Arrow';
import { useSearchParams } from 'react-router-dom';

const HeaderProducto = (props) =>{

    const [searchParams] = useSearchParams()
    const params = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.navigate);
        if(searchParams.get('productoReserva') === `/productos/${params.id}/reserva`){
            props.estado(false)
        }
    }
    return  (
        
        <div className='headerContainer'>
            <div className='Caract'>
            <h3>Auto</h3>
            <h1>{props.titulo}</h1>
            </div>

            <Arrow click={handleClick}/>
            
        </div>


    );

}
export default HeaderProducto
