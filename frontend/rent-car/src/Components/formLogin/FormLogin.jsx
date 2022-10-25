import { Formik , Form, Field } from 'formik'
import React from 'react'

const FormLogin = () => {
  return (
    <Formik>
        <Form>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo"
          />
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="*********"
          />
        </Form>
    </Formik>
  )
}

export default FormLogin