import React from "react";
import CalendarTwo from "./CalendarTwo";
import CardReserva from "./cardReserva/CardReserva";
import FormHoraLlegada from "./FormHoraLlegada";
import FormReserva from "./FormReserva";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Context } from "../../Contexts/CategoryContextProvider";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { formatDateABase, formatDateFront } from "../../Utils/formatDate";
import { fetchReserva } from "../../Utils/post";
import { useParams } from "react-router";

const Reserva = (props) => {
  const { hora, setHora } = useContext(Context);
  const { selectedDates } = useContext(Context);
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
    console.log(typeof selectedDates)
    console.log(typeof (selectedDates[0].endDate))
  }
  const reserva = {
    horaComienzoDeReserva: hora,
    fechaInicioReserva: fechaInicioReserva,
    fechaFinalReserva: fechaFinalReserva,
    producto_id: params.id,
    user_id: usuarioSessionStorage?.user_Id,
  };

  return (
    <Formik
      initialValues={{
        hora: hora,
        nombre: usuarioSessionStorage ? `${usuarioSessionStorage.nombre}` : "",
        apellido: usuarioSessionStorage
          ? `${usuarioSessionStorage.apellido}`
          : "",
        email: usuarioSessionStorage ? `${usuarioSessionStorage.username}` : "",
        ciudad: usuarioSessionStorage ? `${usuarioSessionStorage.ciudad}` : "",
        selectedDates: selectedDates,
      }}
      validationSchema={PostReservaSchema}
      onSubmit={({setFieldError}) => {
        let postreserva = fetchReserva("http://localhost:8080/reservas", reserva, JWT);
        console.log(postreserva)
      }}
    >
      {({ errors, values, initialValues, handleSubmit, setFieldValue}) => (
        <div>
          <div className="containerReservas">
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
              titulo={props?.tituloCard}
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
