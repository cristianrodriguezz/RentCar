import React from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { getValidate } from '../../Utils/getValidation'


const FormLogin = (props) => {
  
  return (
    
    
    <Formik 
      initialValues={{
        email: '',
        password: ''
      }}
      validate={ (valores) =>{
        let errores = {};
        
        return getValidate(valores, errores, 'login');
      }}
      onSubmit={()  => {
        console.log("Acá hacemos la llamada a la api");
        localStorage.setItem("user","tokenjwt");
        window.location.replace("/")
      }}
    >
    

      { ( {errors , values}) => (
        <Form className='formulario'>
          {console.log("objeto de erorres"  + errors)}
          <h3>Iniciar sesión</h3>
          <div className='inter'>
            <label htmlFor='email'>Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="email@mail.com"
            />
            <ErrorMessage name='email' component={ () => (<div className='error'>{errors.email} </div>)}/>
          </div>
          <div className='inter'>
            <label htmlFor='password'>Contraseña:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="*********"
            />
          </div>
          <ButtonForm tipo='submit'>Ingresar</ButtonForm>
          <Link to='/signUp'>Registrarse</Link>
          <ErrorMessage name='password' component={ () => (<div className='error'>{errors.password} </div>)}/>
      </Form>
      )}
        
    </Formik> 
  )
}

export default FormLogin