import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'
import { useState } from 'react'
import { postBodyLogin } from '../../Utils/post'
import useFetch from '../../Utils/useFetch'

const FormLogin = () => {

  const navigate = useNavigate();
  const {setSesions} = useContext(Context);
  const {setUser} = useContext(Context);
  const {user} = useContext(Context);
  const response = useFetch(`http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/usuarios/${user.username}`)
  
  const usuario = {
    id: response.respuesta?.id,
    nombre: response.respuesta?.username,
    apellido: response.respuesta?.apellido,
    email: response.respuesta?.email,
    ciudad: response.respuesta?.ciudad,
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={ (valores) =>{
        let errores = {};
        if (!valores.email) {
          errores.email = "Credenciales incorrectas, por favor intente de nuevo.";
        }
        return errores;
      }}
      onSubmit={(valores, {resetForm}) => {
        console.log("Acá hacemos la llamada a la api");
        
        fetch('http://localhost:8080/auth/token', postBodyLogin(
          {
            email: valores.email,
            password: valores.password
          })
          )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setUser(
            {
              id: result.respuesta.user_Id,
              username: result.respuesta.username,
              token: result.respuesta.token,
              ciudad: result.respuesta.ciudad,
              nombre: result.respuesta.nombre,
              apellido: result.respuesta.apellido
            }
          )
          localStorage.setItem("user",result.respuesta.token)
          setSesions(true)
        })
        
        sessionStorage.setItem('user',JSON.stringify(usuario))
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
          <ButtonForm tipo='onSubmit'>Ingresar</ButtonForm>
          <div className='noEstasRegistrado'>
            <span>¿No estas registrado?</span>
            <Link to='/signup'>Haz clic aquí</Link>
            <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
          </div>
          <ErrorMessage name='password' component={() => (<div className='error'>{errors.email} </div>)} />
        </Form>
      )}

    </Formik>
  )
}

export default FormLogin