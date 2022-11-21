import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const FormHoraLlegada = () => {
  return (
    <Formik
      initialValues={{
        hora: '',
        calendario: ''
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.email) {
            errores.email = "Por favor ingresá un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)
          ) {
            errores.email = "Ingresá un correo válido";
          }


        return errores;
      }}
      onSubmit={() => {
        console.log("Acá hacemos la llamada a la api");
        localStorage.setItem("user", "tokenjwt");
        window.location.replace("/")
      }}
    >


      {({ errors, values }) => (
        <Form className='formulario llegada'>
          {console.log("objeto de erorres" + errors)}
          <div className='inter'>
            <label htmlFor='horario'>Indicá tu horario estimado de llegada</label>
            <Field as="select" id="horario" name="horario" placeholder="email@mail.com">
                <option hidden>Selecciona tu horario</option>
                <option value="00:00">00:00 AM</option>
                <option value="01:00">01:00 AM</option>
                <option value="02:00">02:00 AM</option>
                <option value="03:00">03:00 AM</option>
                <option value="04:00">04:00 AM</option>
                <option value="05:00">05:00 AM</option>
                <option value="06:00">06:00 AM</option>
                <option value="07:00">07:00 AM</option>
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM"</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
                <option value="21:00">09:00 PM</option>
                <option value="22:00">10:00 PM</option>
                <option value="23:00">11:00 PM</option>
             </Field>
            <ErrorMessage name='email' component={() => (<div className='error'>{errors.email} </div>)} />
          </div>

        </Form>
      )}

    </Formik>
  )
}

export default FormHoraLlegada