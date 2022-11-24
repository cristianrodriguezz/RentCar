import React from 'react'
import { Formik, Form, Field } from 'formik'
import './reserva.scss'

const FormReserva = (props) => {
  return (
    <Formik 
        initialValues={{
            nombre:`${props.nombre}`,
            apellido:`${props.apellido}`,
            email: `${props.email}`,
            ciudad: ''
        }}
        validate={(valores) => {
            let errores = {};
            if (!valores.ciudad) {
                errores.email = "Por favor ingresá una ciudad";
            } 
            return errores;
          }}
        onSubmit={(valores, {resetForm})  => {
            resetForm();
            console.log(valores)
            console.log("Acá hacemos la llamada a la api");
        }}
    >
        {() => (
            
            <Form className="formReserva">
                <div className='inter'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <Field 
                        type='text'
                        id='nombre' 
                        name='nombre' 
                        placeholder='Tu nombre'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='apellido'>Apellido:</label>
                    <Field 
                        type='text'
                        id='apellido' 
                        name='apellido' 
                        placeholder='Tu apellido'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='email'>Ingresar correo electrónico</label>
                    <Field 
                        type='email'
                        id='email' 
                        name='email' 
                        placeholder='tucorreo@mail.com'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <Field 
                        type='ciudad'
                        id='ciudad' 
                        name='ciudad'
                        placeholder='Mendoza'
                        className='input'
                    />
                </div>
            </Form>
        )}
        
    </Formik>
  )
}

export default FormReserva