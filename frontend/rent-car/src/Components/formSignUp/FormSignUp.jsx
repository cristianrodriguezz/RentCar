import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import './formSignUp.css'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { getValidate } from '../../Utils/getValidation'

const FormSignUp = () => {

    return (
    <Formik 
        initialValues={{
            nombre:'',
            apellido:'',
            email: '',
            password:'',
            pw:''
        }}
        validate={ (valores) =>{
            let errores = {};

            return getValidate(valores,errores,'signup');
        }}
        onSubmit={(valores, {resetForm})  => {
            resetForm();
            console.log(valores)
            console.log("Acá hacemos la llamada a la api");
        }}
    >
        {( {errors, values} ) => (
            
            <Form className="formulario">
                
                {console.log(errors)}
                <h1>Registro</h1>
                <div className='inter'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <Field 
                        type='text'
                        id='nombre' 
                        name='nombre' 
                        placeholder='Tu nombre'
                    />
                    <ErrorMessage name='nombre' component={ () => (<div className='error'>{errors.nombre} </div>)}/>
                </div>
                <div className='inter'>
                    <label htmlFor='apellido'>Apellido:</label>
                    <Field 
                        type='text'
                        id='apellido' 
                        name='apellido' 
                        placeholder='Tu apellido'
                    />
                    <ErrorMessage name='apellido' component={ () => (<div className='error'>{errors.apellido} </div>)}/>
                </div>
                <div className='inter'>
                    <label htmlFor='email'>Ingresar correo electrónico</label>
                    <Field 
                        type='email'
                        id='email' 
                        name='email' 
                        placeholder='tucorreo@mail.com'
                    />
                    <div><ErrorMessage name='email' component={ () => (<div className='error'>{errors.email} </div>)}/></div>
                </div>
                <div className='inter'>
                    <label htmlFor='password'>Contraseña:</label>
                    <Field 
                        type='password' 
                        id='password' 
                        name='password'
                    />
                    <ErrorMessage name='password' component={ () => (<div className='error'>{errors.password} </div>)}/>
                </div>
                <div className='inter'>
                    <label htmlFor='pw'>Confirmar contraseña:</label>
                    <Field 
                        type='password' 
                        id='pw' 
                        name='pw'
                    />
                    <ErrorMessage name='pw' component={ () => (<div className='error'>{errors.pw} </div>)}/>
                </div>
                <ButtonForm>Crear cuenta</ButtonForm>
                <div className='noEstasRegistrado'>
                    <span>¿No estas registrado?</span>
                    <Link to='/signUp'>Haz clic aquí</Link>
                    <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
                </div>

            </Form>
            
        )}
        
    </Formik>
  )
}

export default FormSignUp