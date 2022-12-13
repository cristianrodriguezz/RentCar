import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import './formSignUp.css'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { getValidate } from '../../Utils/getValidation'
import { crearCuenta } from '../../Utils/post'
import { useState } from 'react'
import RegistradoConExito from './RegistradoConExito'



const FormSignUp = () => {
    const [registrado, setRegistrado] = useState(false)
    const [emailYaRegistrado,setEmailYaRegistrado] = useState('')

    if (registrado){
        return <div className='containerRegistrado'><RegistradoConExito/></div>
    }

    return (
    <div className='containerFormulario'>
    <Formik 
        initialValues={{
            username:'',
            apellido:'',
            email: '',
            password:'',
            pw:''
        }}
        validate={ (values) =>{
            let errores = {};
            return getValidate(values,errores,'signup');
        }}


        onSubmit={(values, {resetForm} )  => {
            console.log("submit");
            return crearCuenta(values)
                .then(() => {
                    setRegistrado(true)
                })
                .catch((error)=> {
                    setEmailYaRegistrado(error.response.data)
                    setTimeout(() => {
                        setEmailYaRegistrado(null)
                    }, 5000);
                })
        }}
    >
        {( {errors, values, isSubmitting }) => (
            
            <Form className="formulario">
                {console.log(errors)}
                
                <h1>Registro</h1>
                <div className='inter'>
                    <Field 
                        type='text'
                        id='username' 
                        name='username' 
                        placeholder='Tu nombre'
                        className={ errors.username ? 'errorinput input' : 'input'}
                    />
                    <ErrorMessage name='username' component={ () => (<div className='error'>{errors.username} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='text'
                        id='apellido' 
                        name='apellido' 
                        placeholder='Tu apellido'
                        className={ errors.apellido ? 'errorinput input' : 'input'}
                    />
                    <ErrorMessage name='apellido' component={ () => (<div className='error'>{errors.apellido} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='email'
                        id='email' 
                        name='email' 
                        placeholder='tucorreo@mail.com'
                        className={ errors.email ? 'errorinput input' : 'input'}
                    />
                    <ErrorMessage name='email' component={ () => (<div className='error'>{errors.email} </div>)}/>
                </div>
                <div className='inter'>

                    <Field 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='Contraseña'
                        className={ errors.password ? 'errorinput input' : 'input'}
                    />
                    <ErrorMessage name='password' component={ () => (<div className='error'>{errors.password} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        type='password' 
                        id='pw' 
                        name='pw'
                        placeholder='Repetir contraseña'
                        className={ errors.pw ? 'errorinput input' : 'input'}
                    />
                    <ErrorMessage name='pw' component={ () => (<div className='error'>{errors.pw} </div>)}/>
                </div>
                {
                isSubmitting 
                ? 
                <ButtonForm loading={true} disabled={true} className={emailYaRegistrado ? 'emailRegistrado ' : ''}/>
                :
                <ButtonForm>Crear cuenta</ButtonForm>
                }
                <div className='noEstasRegistrado'>
                    <span>¿Ya tienes una cuenta? </span>
                    <Link to='/login'>Haz clic aquí</Link>
                    <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
                </div>
                <div className={'error'}>{emailYaRegistrado}</div>
            </Form>
            
        )}
        
    </Formik>
    </div>
  )
}

export default FormSignUp