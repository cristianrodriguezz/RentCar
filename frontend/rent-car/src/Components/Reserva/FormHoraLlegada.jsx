import React, { useContext } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Context } from "../../Contexts/CategoryContextProvider";

const FormHoraLlegada = (props) => {
  const { hora, setHora } = useContext(Context);
  const gethoraSig = (horarios = [],horario) => {
    let horaSig = '';
    if(horario ==='Seleccionar hora de llegada' ){
      horaSig = ''
    }
    else if(horarios.findIndex(x => x === horario)===23){
      horaSig = "00:00"
    }
    
    else {
      const indexHora = horarios.findIndex(x => x === horario)
      horaSig = horarios[indexHora+1]
    }
    return horaSig;
  }
  const horarios =[
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ]
  return (
    
        <form className="formulariollegada2">
          <div className="inter">
            {!hora ? (
              <p className="seleccionaHorarioLlegada">
                <CheckCircleOutlineIcon />
                Seleccione horario del check-in de su vehiculo
              </p>
            ) : (
              <p className="seleccionaHorarioLlegada">
                <CheckCircleOutlineIcon />
                Tu vehiculo va a estar listo para el check-in entre las {hora} y
                las {gethoraSig(horarios,hora)}
              </p>
            )}
            <label htmlFor="horario">
              Indicá tu horario estimado de llegada
            </label>
            <select
              className="horarioDeLlegadaInput"
              id="horario"
              name="horario"
              onChange={(event) => {
                setHora(event.target.value);
                props.setFieldValue('hora',event.target.value)
              }}
            >
              <option hidden>Seleccionar hora de llegada</option>
              {horarios.map((element) => (
              <option key={`${element}`} value={`${element}`}>
                {element}
              </option>
            ))}
            </select>
            {props?.errores ? <div className="error">{props?.errores}</div>:null}
          </div>
        </form>
  );
};

export default FormHoraLlegada;
