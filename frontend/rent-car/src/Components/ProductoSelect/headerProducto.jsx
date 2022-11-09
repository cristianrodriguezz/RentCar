import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate,useParams} from 'react-router';
import './headerProducto.css'

const HeaderProducto = (props) =>{
    const params = useParams();
    console.log(params.id)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    }
    return  (
        
        <div className='headerContainer'>
            <div className='Caract'>
            <h3>dasdsads</h3>
            <h2>asdas</h2>
            </div>
            <button onClick={handleClick}><ArrowBackIosIcon sx={{color: "#FFF"}}/></button >
            
        </div>


    );

}
export default HeaderProducto