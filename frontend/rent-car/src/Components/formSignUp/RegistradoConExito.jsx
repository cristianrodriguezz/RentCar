import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import './registradoConExito.scss'
import { useParams,useNavigate,useLocation } from "react-router";

const RegistradoConExito = () => {
    const navigate = useNavigate();
    
    const timer = () => {
        setTimeout(() => {
            navigate("/");
          }, 4000)
    }
  return (
    <div className="ContainerTitutlo">
      <h1>Registrado con exito</h1>
      <CheckCircleOutlineIcon
        style={{
          color: "var(--bottonForm)",
          fontSize: "3rem",
          marginTop: "1rem",
        }}
      />
      {timer()}
    </div>
  );
};

export default RegistradoConExito;
