import React from "react";
import CalendarTwo from "./CalendarTwo";
import CardReserva from "./cardReserva/CardReserva";
import FormHoraLlegada from "./FormHoraLlegada";
import FormReserva from "./FormReserva";
import { Formik  } from "formik";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { formatDateABase } from "../../Utils/formatDate";
import { fetchReserva } from "../../Utils/post";
import { useParams } from "react-router";
import {
  Popover,
  Card,
  CardActions,
  CardContent,
  Typography,
  
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router";


const Reserva = (props) => {
  const { hora, setHora } = useContext(Context);
  const { selectedDates,setSelectedDates} = useContext(Context);
  const navigate = useNavigate();
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem("user"));
  const params = useParams();
  const JWT = JSON.parse(localStorage.getItem("user"));

  const PostReservaSchema = Yup.object().shape({
    hora: Yup.string()
      .required("Ingrese un horario.")
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "El horario no es valido. ."
      ),
    selectedDates: Yup.array().required("Ingrese una fecha").nullable(true),
  });

  if (selectedDates) {
    var fechaInicioReserva = formatDateABase(selectedDates[0].startDate);
    var fechaFinalReserva = formatDateABase(selectedDates[0].endDate);
    console.log(typeof selectedDates);
    console.log(typeof selectedDates[0].endDate);
  }

  const reserva = {
    horaComienzoDeReserva: hora,
    fechaInicioReserva: fechaInicioReserva,
    fechaFinalReserva: fechaFinalReserva,
    producto_id: params.id,
    user_id: usuarioSessionStorage?.user_Id,
    nombreProducto: props?.nombre,
    urlImagen: props?.imagenes?.imagenes,
  };
  const [reservaExitosa,setReservaExitosa] = useState(false)

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <Formik
      initialValues={{
        hora: hora,
        nombre: usuarioSessionStorage ? `${usuarioSessionStorage.apellido}` : "",
        apellido: usuarioSessionStorage
          ? `${usuarioSessionStorage.nombre}`
          : "",
        email: usuarioSessionStorage ? `${usuarioSessionStorage.username}` : "",
        ciudad: usuarioSessionStorage ? `${usuarioSessionStorage.ciudad}` : "",
        selectedDates: selectedDates,
      }}
      validationSchema={PostReservaSchema}
      onSubmit={(values,{resetForm}) => {
        fetchReserva(
          "http://186.123.128.63:8080/RentCar/reservas",
          reserva,
          JWT
        );
        resetForm();
        setReservaExitosa(true);
        setHora("")
        setSelectedDates(null)
      }}
    >
      {({ errors, initialValues, handleSubmit, setFieldValue }) => (
        <div>
          <div className="containerReservas" id="containerReservas">
            {reservaExitosa ? (
              
              <Popover
                open={reservaExitosa}
                sx={{
                  bgcolor: "#e4e0e0cc",
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'

                }}
                PaperProps={
                  
                  {
                  style: {
                  width: '35%',
                  height: 'auto',
                  borderRadius :'1rem',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  position:'unset',
                  top:'none',
                  left:'none',
                },
                }}
              >
                <Card sx={{
                   width: 1/1, height: 1/1,
                   borderRadius:'1rem',
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'center',
                   alignItems:'center',
                   }}>
                  <CheckCircleOutlineIcon
                  style={{ color: 'var(--bottonForm)',fontSize:'2.5rem',marginTop:'2rem' }}
                   />
                  <CardContent>
                    <Typography fontSize={'1.2rem'}>
                      <p>Su reserva se ha creado exitosamente</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={navigateHome}
                     style={{marginBottom:'1.5rem',fontSize:'1rem',width:'6rem',height:'2.5rem'}}
                     >Aceptar</button>
                  </CardActions>
                </Card>
              </Popover>
            ) : null}
            <h2>Completá tus datos</h2>
            <FormReserva
              nombre={initialValues.nombre}
              apellido={initialValues.apellido}
              email={initialValues.email}
              ciudad={initialValues.ciudad}
            />
            <div className="fechaReservas">
              <h2>Seleccioná tu fecha de reserva</h2>
              <CalendarTwo
                errores={errors.selectedDates}
                setFieldValue={setFieldValue}
              />
            </div>
            <div className="horarioLlegada">
              <h3>Tu horario de llegada</h3>
              <FormHoraLlegada
                errores={errors.hora}
                setFieldValue={setFieldValue}
              />
            </div>
            <CardReserva
              titulo={props?.nombre}
              ciudad={props?.ubicacion}
              pais={props?.ubicacion}
              imagenes={props?.imagenes}
              handleSubmit1={handleSubmit}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Reserva;
