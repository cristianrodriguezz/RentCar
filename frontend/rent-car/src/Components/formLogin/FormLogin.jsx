import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'

const FormLogin = () => {

  const navigate = useNavigate();

  const {setSesions} = useContext(Context);

  const {setUser} = useContext(Context);

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      
      onSubmit={(valores, {resetForm}) => {
        console.log("Acá hacemos la llamada a la api");
        
        axios.post("http://localhost:8080/auth/token", {
          email:valores.email,
          password:valores.password
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", response?.data?.respuesta?.token);
          setSesions(response?.data?.respuesta?.token)
          setUser(response?.data?.respuesta?.username)
        });
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