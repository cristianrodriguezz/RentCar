import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import './formSignUp.css'
import { Link } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'

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

            if (!valores.email ) {
                errores.email = "Por favor ingresá un email";
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                errores.email = "Ingresá un correo válido"
            }

            if(!valores.nombre){
                errores.nombre = "Por favor ingresá un nombre"
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = "El nombre solo puede contener letras y espacios"
            }

            if(!valores.apellido){
                errores.apellido = "Por favor ingresá un apellido"
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
                errores.apellido = "El nombre solo puede contener letras y espacios"
            }

            if(!valores.password){
                errores.password = "Por favor ingresá una contraseña"
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.password)){
                errores.password = `La contraseña debe contener: Minimo 8 caracteres
                Maximo 15
                - Al menos una letra mayúscula
                - Al menos una letra minucula
                - Al menos un dígito
                - No espacios en blanco
                - Al menos 1 caracter especial `
            }

            if(!valores.pw){
                errores.pw = "Por favor ingresá la confirmación de la contraseña"
            } else if (valores.pw !== valores.password){
                errores.pw = "Las contraseñas no coindicen"
            }
            
            return errores;
        }}
        onSubmit={({resetForm})  => {
            resetForm();
            console.log("Acá hacemos la llamada a la api");
        }}
    >
        {( {errors, values} ) => (
            
            
            <Form className="formulario">
                <h3>Crear cuenta</h3>
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
                <Link to='/login'>Login</Link>
            </Form>
            
        )}
        
    </Formik>
  )
}

export default FormSignUp