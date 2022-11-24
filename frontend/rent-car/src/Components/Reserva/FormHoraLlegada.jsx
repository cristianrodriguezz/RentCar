import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FormHoraLlegada = () => {
  const [hora, setHora] = useContext();

  return (
    <Formik
      initialValues={{
        hora: "",
        calendario: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.hora) {
          errores.hora = "Por favor ingresá una hora";
        }
        return errores;
      }}
      onSubmit={() => {
        console.log("Acá hacemos la llamada a la api");
        localStorage.setItem("user", "tokenjwt");
        window.location.replace("/");
      }}
    >
      {({ errors, values }) => (
        <Form className="formulario llegada">
          {console.log("objeto de erorres" + errors)}
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
                las {hora}
              </p>
            )}
            <label htmlFor="horario">
              Indicá tu horario estimado de llegada
            </label>
            <Field
              className="horarioDeLlegadaInput"
              as="select"
              id="horario"
              name="horario"
              placeholder="email@mail.com"
              onChange={(event) => {
                setHora(event.target.value);
              }}
            >
              <option hidden>Seleccionar hora de llegada</option>
              <option value="00:00">00:00</option>
              <option value="01:00">01:00</option>
              <option value="02:00">02:00</option>
              <option value="03:00">03:00</option>
              <option value="04:00">04:00</option>
              <option value="05:00">05:00</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
            </Field>
            <ErrorMessage
              name="horario"
              component={() => <div className="error">{errors.hora} </div>}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormHoraLlegada;
