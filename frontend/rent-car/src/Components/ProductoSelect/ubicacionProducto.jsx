
import { useParams } from 'react-router'
import useFetch from '../../Utils/useFetch'
import './ubicacionProducto.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';


const UbicacionProducto = () => {

    const params = useParams();
    console.log(params.id)

    const Response = useFetch(`http://localhost:8080/productos/${params.id}`)



    return(
    <div className='ubicacionContainer'>
        <p><LocationOnIcon/>{Response.ciudad?.nombre}, {Response.ciudad?.pais}</p>
        <div>
            <p style={{"textAlign":"center","fontWeight":"700"}}>Muy bueno</p>
            <p><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/><StarIcon color='primary'/></p>
        </div>
        
    </div>
    )

}
export default UbicacionProducto;