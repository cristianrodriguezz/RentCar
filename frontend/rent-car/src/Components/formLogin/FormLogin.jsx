import React from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'

const FormLogin = (props) => {
  const usuario = {
      email: "user@mail.com",
      password: "user"
  }

  return (
    <Formik 
      initialValues={{
        email: '',
        password: ''
      }}
      validate={ (valores) =>{
        let errores = {};

        if(valores.email !== usuario.email && valores.password !== usuario.password  ){
          errores.email = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
          errores.password = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
        }

        return errores;
      }}
      onSubmit={()  => {
        console.log("Acá hacemos la llamada a la api");
        localStorage.setItem("user","tokenjwt");
        window.location.replace("/")
      }}
    >
    

      { ( {errors , values}) => (
        <Form className='formulario'>
          {console.log(values)}
          {console.log(errors)}
          <div>
            <label htmlFor='email'>Ingresar email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo"
            />
          </div>
          <div>
            <label htmlFor='password'>Ingresar contraseña</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="*********"
            />
          </div>
          <ButtonForm>Ingresar</ButtonForm>
          <Link to='/signUp'>Registrarse</Link>
          <ErrorMessage name='password' component={ () => (<div className='error'>{errors.password} </div>)}/>
      </Form>
      )}
        
    </Formik>
  )
}

export default FormLogin