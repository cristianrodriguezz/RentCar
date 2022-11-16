import React from 'react'
import './ubicacionProducto.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';


const UbicacionProducto = (props) => {


    return(
    <div className='ubicacionContainer'>
        <p><LocationOnIcon/>{props.ubicacion?.nombre}, {props.ubicacion?.pais}</p>
        <div>
            <p style={{"textAlign":"center","fontWeight":"700"}}>Muy bueno</p>
            <p><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/></p>
        </div>
        
    </div>
    )

}
export default UbicacionProducto;