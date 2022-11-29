import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import './formSignUp.css'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { getValidate } from '../../Utils/getValidation'
import { postBodySignUp } from '../../Utils/post'
import useFetch from '../../Utils/useFetch'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'

const FormSignUp = () => {


    const [postValores, setPostValores] = useState();

    useFetch('http://ec2-18-191-234-28.us-east-2.compute.amazonaws.com:8080/usuarios',postValores);

    return (
    <Formik 
        initialValues={{
            username:'',
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
            console.log(valores)
            setPostValores(postBodySignUp(valores))
            resetForm()
        }}
    >
        {( {errors, values} ) => (
            
            <Form className="formulario">
                
                {console.log(errors)}
                <h1>Registro</h1>
                <div className='inter'>
                    <Field 
                        type='text'
                        id='username' 
                        name='username' 
                        placeholder='Tu nombre'
                        className='input'
                    />
                    <ErrorMessage name='username' component={ () => (<div className='error'>{errors.username} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='text'
                        id='apellido' 
                        name='apellido' 
                        placeholder='Tu apellido'
                        className='input'

                    />
                    <ErrorMessage name='apellido' component={ () => (<div className='error'>{errors.apellido} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='email'
                        id='email' 
                        name='email' 
                        placeholder='tucorreo@mail.com'
                        className='input'
                    />
                    <ErrorMessage name='email' component={ () => (<div className='error'>{errors.email} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='Contraseña'
                        className='input'
                    />
                    <ErrorMessage name='password' component={ () => (<div className='error'>{errors.password} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        type='password' 
                        id='pw' 
                        name='pw'
                        placeholder='Repetir contraseña'
                        className='input'
                    />
                    <ErrorMessage name='pw' component={ () => (<div className='error'>{errors.pw} </div>)}/>
                </div>
                <ButtonForm>Crear cuenta</ButtonForm>
                <div className='noEstasRegistrado'>
                    <span>¿Ya tienes una cuenta? </span>
                    <Link to='/login'>Haz clic aquí</Link>
                    <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
                </div>

            </Form>
            
        )}
        
    </Formik>
  )
}

export default FormSignUp