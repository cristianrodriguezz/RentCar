import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { getValidate } from '../../Utils/getValidation'
import { useState } from 'react'
import useFetch from '../../Utils/useFetch'
import { postBodyLogin } from '../../Utils/post'



const FormLogin = () => {

  const navigate = useNavigate();


  const [postLogin, setPostLogin] = useState();

  const Response = useFetch('http://localhost:8080/auth/token',postLogin)


  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={(valores) => {
        let errores = {};

        return getValidate(valores, errores, 'login');
      }}
      onSubmit={(valores, {resetForm}) => {
        console.log("Acá hacemos la llamada a la api");
        
        setPostLogin(postBodyLogin(valores))
        localStorage.setItem("user", Response?.respuesta?.token);
        navigate("/")
      }}
    >


      {({ errors, values }) => (
        <Form className='formulario'>
          <h1>Iniciar sesión</h1>
          <div className='inter'>
            <label htmlFor='email'>E-mail:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="email@mail.com"
              className='input'
            />
            <ErrorMessage name='email' component={() => (<div className='error'>{errors.email} </div>)} />
          </div>
          <div className='inter'>
            <label htmlFor='password'>Contraseña:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="*********"
              className='input'
            />
          </div>
          <ButtonForm tipo='submit'>Ingresar</ButtonForm>
          <div className='noEstasRegistrado'>
            <span>¿No estas registrado?</span>
            <Link to='/signUp'>Haz clic aquí</Link>
            <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
          </div>
          <ErrorMessage name='password' component={() => (<div className='error'>{errors.password} </div>)} />
        </Form>
      )}

    </Formik>
  )
}

export default FormLogin