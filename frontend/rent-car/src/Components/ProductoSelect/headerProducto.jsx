import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate,useParams} from 'react-router';
import './headerProducto.css'
import useFetch from '../../Utils/useFetch';

const HeaderProducto = (props) =>{
    const params = useParams();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    }
    const Response = useFetch(`http://localhost:8080/productos/${params.id}`)

    return  (
        
        <div className='headerContainer'>
            <div className='Caract'>
            <h3>Auto</h3>
            <h1>{Response.nombre}</h1>
            </div>
            <ArrowBackIosIcon sx={{color: "black"}} onClick={handleClick}/>
            
        </div>


    );

}
export default HeaderProducto