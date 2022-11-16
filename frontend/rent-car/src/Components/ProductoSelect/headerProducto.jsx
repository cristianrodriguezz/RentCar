import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate,useParams} from 'react-router';
import './headerProducto.css'

const HeaderProducto = (props) =>{
    const params = useParams();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    }
    return  (
        
        <div className='headerContainer'>
            <div className='Caract'>
            <h3>Auto</h3>
            <h1>{props.titulo}</h1>
            </div>
            <ArrowBackIosIcon sx={{color: "black"}} onClick={handleClick}/>
            
        </div>


    );

}
export default HeaderProducto